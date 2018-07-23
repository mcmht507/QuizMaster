class ApiDocsController < ApplicationController
  include Swagger::ApiDocs
  skip_before_action :authenticate_user_from_token!, only: [:index]
  def index
    render json: root_json, status: :ok
  end
end