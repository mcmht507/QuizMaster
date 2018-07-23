# module Api::V1
class UsersController < ApplicationController
  include Swagger::UsersApi
  before_action :set_user, only: [:show]

  # GET /users/1
  def show
    res_success(make_user(@user))
  end

  # POST /users
  def create
    @user = User.new(user_params)
    # exist check
    if exist_user(@user.user_id)
      return res_conflict()
    end

    if !@user.blank? && @user.save
      res_success(@user)
    else
      res_server_err(@user.errors)
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
      params.require(:user).permit(:user_id, :password, :name, :email)
    end

    # make user obj
    def make_user
      user_obj = JSON.parse(user_json)
      response = user_obj.except('password')
      JSON.pretty_generate(response)
    end
end