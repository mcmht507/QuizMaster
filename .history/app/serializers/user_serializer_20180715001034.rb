class UserSerializer < ActiveModel::Serializer
  attributes :user_id, :name, :email, :password_digest, :password, :updated_at, :created_at
end