class Answer < ApplicationRecord
  include Swagger::AnswerSchema
  belongs_to :questions
  belongs_to :users
end
