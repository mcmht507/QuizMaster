class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  include Swagger::UserSchema
  # devise :database_authenticatable, :registerable,:validatable
        #  :recoverable, :rememberable, :trackable, :validatable
  # self.primary_key = "user_id"
  devise :database_authenticatable, :registerable, :validatable
  after_create :update_access_token!

  validates :email, presence: true

  def update_access_token!
    self.access_token = "#{self.id}:#{Devise.friendly_token}"
    save
  end
  # has_secure_password
end
