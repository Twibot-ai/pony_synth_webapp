class Api::VoiceController < ApplicationController

  # @route [POST] /api/queue (api_queue)
  def queue_phrase
    PhraseSynthesesJob.perform_later(queue_params[:text_input])
  end

  private

    def queue_params
      params.permit(:text_input)
    end
end
