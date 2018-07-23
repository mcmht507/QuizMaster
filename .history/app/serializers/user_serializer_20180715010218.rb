class UserSerializer < ActiveModel::Serializer
  # attributes :user_id, :name, :email, :password, :password_confirmation, :updated_at, :created_at
  attributes :user_id, :name, :email, :updated_at, :created_at
end