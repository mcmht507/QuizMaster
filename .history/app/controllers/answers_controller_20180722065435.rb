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
    answer = Answer.new(answer_register_params)
    update_answer = Answer.find_by(user_id:@login_user.user_id, question_id: answer.question_id)
    question = Question.find(answer.question_id)
    # exist question check
    if(question.blank?)
      return res_bad_request("question_id")
    end
    # answer judgment
    content = answer.content.gsub(/,/, ' ');
    ret = content.split(/[\s-]+/);
    pointPostion = ret.indexOf("point");
    integerloopLimit = pointPostion != -1 ? pointPostion : ret.length
    decimalVal = "0."
    logger.debug { pointPostion }
    for i to pointPostion..ret.length do
      decimalVal += LOW_NUM[ret[i]]
    end
    decimalVal = decimalVal.to_f
    puts(decimalVal)
    logger.debug { "aaaa" }

    is_correct = true
    # answer check
    if(update_answer.blank?)
      # register
      answer = @login_user.answers.build(answer_params)
      if answer.save
        res_success(answer)
      else
        res_server_err(answer.errors)
      end
    elsif update_answer.update({content:answer.content, is_correct:is_correct})
      res_success(exist_answer)
    else
      res_server_err(answer.errors)
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
    def answer_register_params
      params.require(:answer).permit(:question_id, :content, :is_correct)
    end
end
