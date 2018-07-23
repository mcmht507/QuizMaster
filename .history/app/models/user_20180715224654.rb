class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  include Swagger::UserSchema
  has_many :answers
  has_many :questions
  # auth
  devise :database_authenticatable, :registerable, :validatable
  after_create :update_access_token!
  after_create :update_access_roleType!
  # validates :email, presence: true

  def update_access_token!
    self.access_token = "#{self.id}:#{Devise.friendly_token}"
    save
  end
  def update_access_roleType!
    self.role_type = "common"
    save
  end
  # has_secure_password
end
