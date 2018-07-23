class AnswersController < ApplicationController
  include Swagger::AnswersApi
  before_action :set_answer, only: [:show, :update, :destroy]

  # GET /answers
  # def index
  #   @answers = Answer.all
  #   res_success(@answers)
  # end

  # # GET /answers/{:user_id}
  # def show
  #   res_success(@answer)
  # end

  # POST /answers/soleve
  def solve
    puts(:question_id)
    answer = Answer.new(answer_params)
    exist_answer = Answer.find_by(user_id:@login_user.user_id,question_id: answer.question_id)
    exist_question = Question.find(answer.question_id)
    # exist question check
    if(exist_question.blank?)
      return res_bad_request("question_id")
    end

    # answer check
    if(exist_answer.blank?)
      # register
      puts("aaaaaaaaaa")
      answer = @login_user.answer.build(answer_params)
      if @answer.save
        res_success(@answer)
      else
        res_server_err(@answer.errors)
      end
    else
      # update
      puts("bbbbbbbbb")
    end
  end

  # POST /answers
  def create
    @answer = @login_user.answers.build(answer_params)
    # byebug
    if @answer.save
      res_success(@answer)
    else
      res_server_err(@answer.errors)
    end
  end

  # PATCH/PUT /answers/1
  # def update
  #   if @answer.update(answer_params)
  #     render json: @answer
  #   else
  #     render json: @answer.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /answers/1
  # def destroy
  #   @answer.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_answer
      @answer = Answer.find(params[:answer_id])
    end
    # Only allow a trusted parameter "white list" through.
    def answer_params
      params.require(:answer).permit(:question_id, :content, :is_correct)
    end
end
