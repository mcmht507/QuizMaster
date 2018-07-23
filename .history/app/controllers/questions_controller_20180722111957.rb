class QuestionsController < ApplicationController
  include Swagger::QuestionsApi
  skip_before_action :authenticate_user_from_token!, only: []
  before_action :set_question, only: [:show, :update, :destroy]

  # GET /questions
  def index
    user_answer = Answer.where(user_id: @login_user.user_id)
    @questions = Question
      .left_outer_joins(user_answer)
      # .left_outer_joins(:category)

    # @questions = Question.left_outer_joins(:category)
    render status: 200, json: @questions, include:[:answer]
    # render status: 200, json: @questions, include:[:category,:answer]
  end

  # GET /questions/{:question_id}
  def show
    res_success(@question)
  end

  # POST /questions
  def create
    @question = @login_user.questions.build(question_params)
    if @question.save
      res_success(@question)
    else
      res_server_err(@question.errors)
    end
  end

  # PATCH/PUT /questions/1
  def update
    if @question.update(question_params)
      res_success(@question)
    else
      res_server_err(@question.errors)
    end
  end

  # DELETE /questions/1
  def destroy
    # user exist check
    question_id = @question.question_id
    if !exist_question(question_id)
      return res_not_found()
    end
    # child answer delete
    answers = Answer.find_by(question_id: question_id)
    if !answers.blank?
      # child answer delete
      answers.destroy
    end
    @question.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_question
      @question = Question.find(params[:question_id])
    end
    # exist question check
    def exist_question(question_id)
      exist_question = Question.find_by(question_id: question_id)
      !exist_question.blank?
    end
    # Only allow a trusted parameter "white list" through.
    def question_params
      params.require(:question).permit(:question_id, :content, :category_id, :answer)
    end
end
