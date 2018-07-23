class User < ApplicationRecord
  # has_secure_password
  # self.primary_key = "user_id"
  include Swagger::UserSchema
end
