class Question < ApplicationRecord
  include Swagger::QuestionSchema
  has_many :answers
  belongs_to :users
end
