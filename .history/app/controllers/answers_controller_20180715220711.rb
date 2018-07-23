class AnswersController < ApplicationController
  include Swagger::AnswersApi
  skip_before_action :authenticate_user_from_token!
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

  # POST /answers
  def create
    @question = @login_user.answers.build(answer_params)
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
    def question_params
      params.require(:answer).permit(:question_id, :content, :question_id, :category, :answer)
    end
end
