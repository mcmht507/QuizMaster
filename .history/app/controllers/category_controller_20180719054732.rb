class CategoryController < ApplicationController
  # GET /categories
  def index
    categories = Question.left_outer_joins(:category)
    puts(categories))
    puts("----------------------------------")
    render status: 200, json: @questions, include:[:category]
  end
end
