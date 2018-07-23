class UserSerializer < ActiveModel::Serializer
  attributes :user_id, :name, :email, :password_digest,:updated_at, :created_at
end