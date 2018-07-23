class User < ApplicationRecord
  self.primary_key = "user_id"
  has_secure_password
  include Swagger::UserSchema
  validates :password, presence: true, on: :create
end
