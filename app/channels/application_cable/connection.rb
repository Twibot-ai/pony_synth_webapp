module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :user_token

    def connect
      self.user_token = find_verified_user
    end

    private
      def find_verified_user
        verified_user = find_token
        if verified_user.present?
          verified_user
        else
          reject_unauthorized_connection
        end
      end

      def find_token
        cookies[:user_token]
      end
  end
end
