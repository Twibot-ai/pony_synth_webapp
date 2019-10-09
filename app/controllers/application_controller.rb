class ApplicationController < ActionController::Base
  before_action :set_cookie

  protected
    def set_cookie
      cookies[:user_token] = generate_token unless cookies.has_key?(:user_token)
    end

    def generate_token
      SecureRandom.urlsafe_base64(5)
    end
end
