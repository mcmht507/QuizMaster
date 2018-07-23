class User < ApplicationRecord
  self.primary_key = "user_id"
  has_secure_password
  include Swagger::UserSchema
end
