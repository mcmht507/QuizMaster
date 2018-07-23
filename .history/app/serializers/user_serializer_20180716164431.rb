class UserSerializer < ActiveModel::Serializer
  attributes :user_id, :name, :email, :access_token,:updated_at, :created_at
end