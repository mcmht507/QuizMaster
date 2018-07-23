class Question < ApplicationRecord
  include Swagger::QuestionSchema
  self.primary_key = "question_id"
  belongs_to :category, class_name:'Category', optional: true
  has_many :answers, class_name:'Answer',optional: true
  # has_many :answers, class_name:'Answer',optional: true
  # belongs_to :user, optional: true
  # belongs_to :category, optional: true
end
