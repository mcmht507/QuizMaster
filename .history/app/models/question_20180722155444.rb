class Question < ApplicationRecord
  include Swagger::QuestionSchema
  self.primary_key = "question_id"
  attributes :question_id, :user_id, :content, :category_id
  has_many :answers, class_name:'Answers',optional: true
  belongs_to :user, optional: true
  belongs_to :category, optional: true

end
