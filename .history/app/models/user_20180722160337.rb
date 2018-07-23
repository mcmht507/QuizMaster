class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  include Swagger::UserSchema
  has_many :answers, class_name:'Answer',optional: true
  has_many :questions, class_name:'Qnswer',optional: true
  # attribute :user_id, :name, :email, :role_type, :access_token, :updated_at, :created_at
  # auth
  devise :database_authenticatable, :registerable, :validatable
  after_create :update_access_token!,:update_access_roleType!
  # validates :email, presence: true

  def update_access_token!
    self.access_token = "#{self.id}:#{Devise.friendly_token}"
    save
  end

  def update_access_roleType!
    self.role_type = "public"
    save
  end
  # has_secure_password
end
