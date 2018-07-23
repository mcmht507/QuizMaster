class AnswersController < ApplicationController
  include Swagger::AnswersApi
  before_action :set_answer, only: [:show, :update, :destroy]

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
    # content = answer.content.gsub(/,/, ' ');
    content = "eight hundred ninety billion point three"
    ret = content.split(/[\s-]+/)
    pointPostion = ret.index("point")
    integerloopLimit = pointPostion.nil? ? ret.length : pointPostion
    highTotalVal = 0
    lowTotalNum = 0
    isCovertErr = false
    for integerIndex in 0..integerloopLimit-1 do
      word = ret[integerIndex]
      logger.debug { "word" }
      logger.debug { word }
      lowNum = Constants::LOW_NUM[word]
      if !lowNum.nil?
        lowTotalNum += lowNum
      elsif word == 'hundred'
        lowTotalNum *= 100
      else
        highNum = Constants::HIGH_NUM[word]
        logger.debug { "highNum" }
        logger.debug { highNum }
        if(!highNum.nil?)
          highTotalVal += lowTotalNum * highNum
          lowTotalNum = 0;
        else
          logger.info { "isCovertErr" }
          isCovertErr = true
          break
        end
      end
    end
    integerVal = lowTotalNum + highTotalVal
    # decimal cal
    if(!pointPostion.nil?)
      logger.debug { "start decimal" }
      logger.debug { "pointPostion" }
      logger.debug { pointPostion }
      decimalVal = "0."
      for decimalIndex in pointPostion+1..ret.length do
        word = ret[decimalIndex]
        logger.debug { "convert decimal" }
        decimalVal += Constants::LOW_NUM[word].to_s
      end
      decimalVal = decimalVal.to_f
    end
    logger.debug { "decimalVal" }
    logger.debug { decimalVal }
    convertAnswerContent = integerVal + decimalVal
    
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
    def covertStrToNum(val)
      # lowNum = LOW_NUM[:val]
      # if !lowNum.nil? 
      # elsif 
      # else
      # end

    end

    # Only allow a trusted parameter "white list" through.
    def answer_register_params
      params.require(:answer).permit(:question_id, :content, :is_correct)
    end
end
