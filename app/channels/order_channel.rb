class OrderChannel < ApplicationCable::Channel
  include Utils::Rescuable

  rescue_from StandardError do |ex|
    Rails.logger.error(ex)
    error('Something went wrong')
  end

  def subscribed
    stream_for stream_name
  end

  def order_phrase(data)
    safe_execute do
      error('Quote is too long!') && return if data['text_input'].length > 100

      PhraseSynthesesJob.perform_later(data['text_input'], user_token)
      transmit order_state: 'queued',
               action: :order_state_changed
    end
  end

  private
    def stream_name
      "user_#{user_token}"
    end

    def error(message)
      transmit order_state: 'error',
               message: message,
               action: :order_state_changed
    end
end
