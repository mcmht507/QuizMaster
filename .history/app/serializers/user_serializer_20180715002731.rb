class UserSerializer < ActiveModel::Serializer
  attributes :user_id, :name, :email, :password_digest, :password, :password_confirmation, :updated_at, :created_at
end