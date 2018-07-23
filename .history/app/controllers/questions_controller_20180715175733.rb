class QuestionsController < ApplicationController
  include Swagger::QuestionsApi
  # skip_before_action :authenticate_user_from_token!, only: []
  before_action :set_question, only: [:show, :update, :destroy]

  # GET /questions
  def index
    @questions = Question.all
    res_success(@questions)
  end

  # GET /questions/1
  def show
    res_success(@question)
  end

  # POST /questions
  def create
    @question = @login_user.questions.build(question_params)
    if @question.save
      render json: @question, status: :created, location: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /questions/1
  def update
    if @question.update(question_params)
      render json: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # DELETE /questions/1
  def destroy
    @question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def question_params
      params.require(:question).permit(:content, :category, :answer)
    end
end
