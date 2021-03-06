class Question < ApplicationRecord
  include Swagger::QuestionSchema
  self.primary_key = "question_id"
  has_many :answers, class_name:'Answer'
  belongs_to :category, class_name:'Category'
  # has_many :answers, class_name:'Answer',optional: true
  # belongs_to :user, optional: true
  # belongs_to :category, optional: true
end
