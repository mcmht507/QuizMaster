class Question < ApplicationRecord
  include Swagger::QuestionSchema
  self.primary_key = "question_id"
  attributes :question_id, :user_id, :content, :category_id
  attribute :asnwer_id ,default: "new default"
  has_many :answers, class_name:'Answer',optional: true
  belongs_to :user, optional: true
  belongs_to :category, optional: true
end
