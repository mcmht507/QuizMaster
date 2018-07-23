class CategoriesController < ApplicationController
  include Swagger::CategoriesApi
  skip_before_action :authenticate_user_from_token!, only: []

  # GET /categories
  def index
    categories = Category.all
    res_success(categories)
  end
end
