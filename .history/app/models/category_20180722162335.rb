class Category < ApplicationRecord
  include Swagger::CategorySchema
  self.primary_key = "category_id"
  has_many :questions, class_name:'Question',optional: true
end
