class Answer < ApplicationRecord
  include Swagger::AnswerSchema
  belongs_to :question, class_name: "Question", foreign_key: "question_id",optional: true
  belongs_to :user, class_name: "User", optional: true

end
