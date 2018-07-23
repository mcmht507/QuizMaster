class Answer < ApplicationRecord
  include Swagger::AnswerSchema
  attributes :answer_id, :question_id, :user_id, :content, :is_correct
  belongs_to :question, class_name: "Question", foreign_key: "question_id",optional: true
  belongs_to :user, optional: true

end
