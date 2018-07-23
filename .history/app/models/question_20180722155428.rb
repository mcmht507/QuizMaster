class Question < ApplicationRecord
  include Swagger::QuestionSchema
  self.primary_key = "question_id"
  has_many :answers, class_name:'Answers'
  belongs_to :user, optional: true
  belongs_to :category, optional: true

  belongs_to :category, optional: true
  has_many :answers, class_name:'answers',optional: true
  attributes :question_id, :user_id, :content, :category_id
end
