class UserSerializer < ActiveModel::Serializer
  attributes :user_id, :name, :email, :updated_at, :created_at
end