class Answer < ApplicationRecord
  include Swagger::AnswerSchema
  belongs_to :questions, optional: true
  # belongs_to :questions, optional: true,foreign_key: [:category_id]
  belongs_to :users, optional: true
end
