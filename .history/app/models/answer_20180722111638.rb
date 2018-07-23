class Answer < ApplicationRecord
  include Swagger::AnswerSchema
  belongs_to :question, optional: true
  belongs_to :user, optional: true
end
