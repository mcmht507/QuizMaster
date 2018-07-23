# module Api::V1
class UsersController < ApplicationController
  include Swagger::UsersApi
  before_action :set_user, only: [:show]

  # GET /users/{:user_id}
  def show
    @user.slice('password')
    res_success(@user)
  end

  # POST /users
  def create
    register_user = User.new(user_params)
    # user exist check
    user_id = register_user.user_id
    if exist_user(user_id)
      return res_conflict()
    end

    if register_user.save
      res_success(register_user)
    else
      res_server_err(register_user.errors)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      # @user = User.find(params[:user_id])
      @user = User.find(params[:user_id])
      if @user.blank?
        res_not_found(:user)
      end
    end
    # user exist check
    def exist_user(user_id)
      @user = User.find_by(user_id: user_id)
      !@user.blank?
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:user_id, :name, :email, :password, :password_confirmation)
    end

    # make user obj
    def make_user(user_json)
      puts(user_json)
      user_obj = JSON.parse(user_json)
      response = user_obj.except('password')
      JSON.pretty_generate(response)
    end
end