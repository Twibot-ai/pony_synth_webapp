module Utils
  module Rescuable
    extend ActiveSupport::Concern

    included do
      include ActiveSupport::Rescuable
    end

    protected
      def safe_execute
        yield
      rescue StandardError => exception
        rescue_with_handler(exception) || raise
      end
  end

end
