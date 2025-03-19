class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  before_action :authenticate_user!

  private

  def authenticate_user!
    @current_user = nil

    authenticate_with_http_token do |token, _options|
      @current_user = User.find_by(api_token: token)
    end

    render json: { error: "Unauthorized" }, status: :unauthorized unless @current_user
  end
end
