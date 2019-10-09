class PhraseSynthesesJob < ApplicationJob

  RETRY_COUNT = 3.freeze

  rescue_from(StandardError) do |ex|
    Rails.logger.error(ex)

    if executions < RETRY_COUNT
      notify("Generating failed, retrying in 1 minute. Retries left: #{RETRY_COUNT - executions}", state: 'retry')
      retry_job wait: 1.second
    else
      notify("Generating failed", state: 'error')
    end
  end

  class << self
    def default_url_options
      Rails.application.config.action_controller.default_url_options
    end
  end

  def perform(phrase, token)
    @token = token

    OrderChannel.broadcast_to(
        "user_#{token}",
        action: :order_state_changed,
        order_state: :generation_started
    )

    script_path = File.join(Rails.root, 'lib', 'python', 'scripts', 'synthesis.py')
    model_path = File.join(Rails.root, 'lib', 'python', 'model', 'checkpoint_step000200000_22hz_16bit.pth')
    config_path = File.join(Rails.root, 'lib', 'python', 'model', '20180505_deepvoice3_ljspeech.json')
    file_name = SecureRandom.urlsafe_base64(5) + '.wav'
    file_path = File.join(Rails.root, 'tmp', file_name)

    command = "python #{script_path} #{model_path} #{config_path} #{phrase} #{file_path}".shellescape
    %x{ #{command} }
    order = Order.create(phrase: phrase, ws_token: token)
    order.synthesized_quote.attach(
      io: File.open(file_path),
      filename: file_name,
      content_type: 'audio/wav'
    )

    File.delete(file_path) if File.exist?(file_path)

    OrderChannel.broadcast_to(
        "user_#{token}",
        action: :order_state_changed,
        order_state: :generation_finished,
        file_url: Rails.application.routes.url_helpers.url_for(order.synthesized_quote)
    )
  end

  protected
    def notify(message, state: 'error')
      OrderChannel.broadcast_to "user_#{@token}",
                                order_state: state,
                                message: message,
                                action: :order_state_changed
    end
end
