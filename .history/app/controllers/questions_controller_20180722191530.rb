class QuestionsController < ApplicationController
  include Swagger::QuestionsApi
  skip_before_action :authenticate_user_from_token!, only: []
  before_action :set_question, only: [:show, :update, :destroy]

  # GET /questions
  def index
    query = "SELECT questions.question_id question_id,questions.content content,questions.user_id user_id,questions.created_at created_at,questions.updated_at updated_at,answers.answer_id answer_id,answers.is_correct is_correct,categories.category_id category_id,categories.content category_content FROM questions LEFT OUTER JOIN categories ON categories.category_id = questions.category_id LEFT OUTER JOIN (select answer_id,question_id,is_correct from answers where user_id = :user_id) answers ON answers.question_id = questions.question_id"
    questions = Question.find_by_sql([query,{user_id: @login_user.user_id}])
    logger.debug { "questions" }
    logger.debug { questions }
    # @questions = Question.left_outer_joins(:category)
    # render status: 200, json: questions, include:[:answer]
    render status: 200, json: ActiveModel::Serializer::CollectionSerializer.new(
             questions,
             each_serializer: QuestionAnswerSerializer
         ).to_json
  end

  # GET /questions/{:question_id}
  def show
    res_success(@question)
  end

  # POST /questions
  def create
    question = @login_user.questions.build(question_params)
    if question.save
      res_success({})
    else
      res_server_err(question.errors)
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
      question_id = params[:question_id];
      query = "SELECT questions.question_id question_id,questions.content, questions.answer answer ,content,questions.user_id user_id,questions.created_at created_at,questions.updated_at updated_at,answers.answer_id answer_id,answers.is_correct is_correct,categories.category_id category_id,categories.content category_content FROM questions LEFT OUTER JOIN categories ON categories.category_id = questions.category_id LEFT OUTER JOIN (select answer_id,question_id,is_correct from answers where user_id = :user_id) answers ON answers.question_id = questions.question_id where questions.question_id = :question_id"
      @question = Question.find_by_sql([query,{user_id: @login_user.user_id,question_id: question_id}]).first
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
