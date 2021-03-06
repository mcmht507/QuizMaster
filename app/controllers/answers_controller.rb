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
    pattern = /^([0-9]+|[0-9]+\.[0-9]+)$/
    answer.content = answer.content ? answer.content.downcase : ""
    question.answer = question.answer ? question.answer.downcase : ""
    if pattern === question.answer && !(pattern === answer.content)
      # convert str to num
      content = answer.content.gsub(/,/, ' ');
      ret = content.split(/[\s-]+/)
      pointPostion = ret.index("point")
      integerloopLimit = pointPostion.nil? ? ret.length : pointPostion
      highTotalVal = 0
      lowTotalNum = 0
      isCovertErr = false
      for integerIndex in 0..integerloopLimit-1 do
        word = ret[integerIndex]
        lowNum = Constants::LOW_NUM[word]
        if !lowNum.nil?
          lowTotalNum += lowNum
        elsif word == 'hundred'
          lowTotalNum *= 100
        else
          highNum = Constants::HIGH_NUM[word]
          if(!highNum.nil?)
            highTotalVal += lowTotalNum * highNum
            lowTotalNum = 0;
          else
            isCovertErr = true
            break
          end
        end
      end
      convertAnswerContent = lowTotalNum + highTotalVal
      # decimal cal
      if(!pointPostion.nil?)
        decimalVal = "0."
        for decimalIndex in pointPostion+1..ret.length do
          word = ret[decimalIndex]
          decimalVal += Constants::LOW_NUM[word].to_s
        end
        convertAnswerContent += decimalVal.to_f
      end
      integerPattern = /^([0-9]+)$/
      questionAnswer = integerPattern === question.answer ? question.answer.to_i : question.answer.to_f
      is_correct = questionAnswer === convertAnswerContent
    else
      is_correct = question.answer === answer.content
    end

    # answer check
    if(update_answer.blank?)
      # register
      answer = @login_user.answers.build(answer_register_params)
      answer.is_correct = is_correct
      if answer.save
        res_success(answer)
      else
        res_server_err(answer.errors)
      end
    elsif update_answer.update({content:answer.content, is_correct:is_correct})
      res_success(update_answer)
    else
      res_server_err(answer.errors)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_answer
      @answer = Answer.find(params[:answer_id])
    end

    # Only allow a trusted parameter "white list" through.
    def answer_register_params
      params.require(:answer).permit(:question_id, :content)
    end
end
