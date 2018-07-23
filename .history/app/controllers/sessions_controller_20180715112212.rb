class SessionsController < ApplicationController
  include Swagger::SessionsApi
  skip_before_action :authenticate_user_from_token!

  # POST /login
  def create
    @user = User.find_for_database_authentication(email: params[:email])
    return invalid_email unless @user

    if @user.valid_password?(params[:password])
      sign_in :user, @user
      render json: @user, serializer: SessionSerializer, root: nil
    else
      invalid_password
    end
  end

  private

  def invalid_email
    warden.custom_failure!
    res_bad_request('email')
  end

  def invalid_password
    warden.custom_failure!
    res_bad_request('password')
  end
end