class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,:validatable
        #  :recoverable, :rememberable, :trackable, :validatable
  # self.primary_key = "user_id"
  include Swagger::UserSchema
  has_secure_password
end
