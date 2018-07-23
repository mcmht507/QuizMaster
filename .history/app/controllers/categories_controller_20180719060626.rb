class CategoriesController < ApplicationController
  include Swagger::CategoriesApi
  skip_before_action :authenticate_user_from_token!, only: []

  # GET /categories
  def index
    categories = Category.find();
    puts(categories)
    render status: 200, json: categories, include:[:category]
  end
end
