module AuthHelper
  def authenticated_headers(user)
    { "Authorization" => "Token token=#{user.api_token}" }
  end
end
