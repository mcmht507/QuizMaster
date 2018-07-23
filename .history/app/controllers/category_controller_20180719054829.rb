class CategoryController < ApplicationController
  include Swagger::CategoriesApi

  # GET /categories
  def index
    categories = Category.find();
    puts(categories))
    render status: 200, json: categories, include:[:category]
  end
end
