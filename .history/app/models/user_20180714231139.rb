class User < ApplicationRecord
  self.primary_key = "user_id"
  include Swagger::UserSchema

end
