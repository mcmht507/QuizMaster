class Answer < ApplicationRecord
  include Swagger::AnswerSchema
  belongs_to :questions, optional: true
  belongs_to :users, optional: true
end
