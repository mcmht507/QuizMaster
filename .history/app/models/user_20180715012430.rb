class User < ActiveRecord::Base
  # self.primary_key = "user_id"
  include Swagger::UserSchema
  has_secure_password
  	validates :email, presence: true, uniqueness: true

end
