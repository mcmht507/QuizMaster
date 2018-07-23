class ApplicationController < ActionController::API
  include ActionController::Serialization
  include AbstractController::Translation

  before_action :authenticate_user_from_token!
  respond_to :json
  ##
  # User Authentication
  # Authenticates the user with OAuth2 Resource Owner Password Credentials
  def authenticate_user_from_token!
    auth_token = request.headers['Authorization']

    if auth_token
      authenticate_with_auth_token auth_token
    else
      authenticate_error
    end
  end

  private

  def authenticate_with_auth_token auth_token
    unless auth_token.include?(':')
      authenticate_error
      return
    end

    user_id = auth_token.split(':').first
    user = User.where(id: user_id).first

    if user && Devise.secure_compare(user.access_token, auth_token)
      # User can access
      sign_in user, store: false
    else
      authenticate_error
    end
  end

  ##
  # Authentication Failure
  # Renders a 401 error
  def authenticate_error
    render json: { error: t('devise.failure.unauthenticated') }, status: 401
  end
    # response list

    # Add a before_action to authenticate all requests.
    # Move this to subclassed controllers if you only
    # want to authenticate certain methods.
    # before_action :authenticate

    # protected

    # Authenticate the user with token based authentication
    # def authenticate
    #     authenticate_token || render_unauthorized
    # end

    # def authenticate_token
    #     authenticate_with_http_token do |token, options|
    #         @current_user = User.find_by(api_key: token)
    #     end
    # end

    # def render_unauthorized(realm = "Application")
    # self.headers["WWW-Authenticate"] = %(Token realm="#{realm.gsub(/"/, "")}")
    # render json: 'Bad credentials', status: :unauthorized
    # end
end
