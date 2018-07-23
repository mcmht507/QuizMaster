class CategoryController < ApplicationController
    # GET /questions
  def index
    @questions = Question.left_outer_joins(:category)
    puts(@questions)
    puts("----------------------------------")
    render status: 200, json: @questions, include:[:category]

    # res_success(@questions,{})
  end
end
