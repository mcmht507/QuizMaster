class Category < ApplicationRecord
  include Swagger::QuestionSchema
  self.primary_key = "category_id"
  has_many :questions
end
