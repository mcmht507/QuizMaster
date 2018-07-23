class User < ActiveRecord::Base
  has_secure_password
  # self.primary_key = "user_id"
  # include Swagger::UserSchema
end
