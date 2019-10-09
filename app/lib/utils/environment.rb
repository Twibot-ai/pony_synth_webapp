module Utils
  class Environment
    class << self
      def take(env_name, default:)
        ENV.fetch(env_name.upcase) { default }
      end
    end
  end
end
