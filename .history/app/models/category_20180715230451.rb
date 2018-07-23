class Category < ApplicationRecord
  self.primary_key = "category_id"
  has_many :questions
end
