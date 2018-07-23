class Question < ApplicationRecord
  include Swagger::QuestionSchema
  self.primary_key = "book_id"
  has_many :answers
  belongs_to :users, optional: true
end
