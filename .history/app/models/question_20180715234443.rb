class Question < ApplicationRecord
  include Swagger::QuestionSchema
  self.primary_key = "question_id"
  has_many :answers
  belongs_to :users, optional: true
  belongs_to :category, optional: true
end
