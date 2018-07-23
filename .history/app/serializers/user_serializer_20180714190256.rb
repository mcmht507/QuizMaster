class UserSerializer < ActiveModel::Serializer
  attributes :user_id, :name, :email, :password, :updated_at, :created_at
