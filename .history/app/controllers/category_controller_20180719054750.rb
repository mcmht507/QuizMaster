class CategoryController < ApplicationController
  # GET /categories
  def index
    categories = Question.find(:category)
    puts(categories))
    render status: 200, json: categories, include:[:category]
  end
end
