class CategoryController < ApplicationController
  # GET /categories
  def index
    categories = Question.left_outer_joins(:category)
    puts(categories))
    render status: 200, json: categories, include:[:category]
  end
end
