class UserSerializer < ActiveModel::Serializer
  attributes :user_id, :name, :email, :role_type, :access_token, :created_at, :updated_at
end