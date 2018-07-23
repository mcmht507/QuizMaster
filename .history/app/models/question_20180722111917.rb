class Question < ApplicationRecord
  include Swagger::QuestionSchema
  self.primary_key = "question_id"
  has_many :answers
  has_many :user_answer
  belongs_to :user, optional: true
  belongs_to :category, optional: true
end
