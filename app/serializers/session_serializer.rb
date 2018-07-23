class SessionSerializer < ActiveModel::Serializer

  attributes :email, :token_type, :user_id, :role_type, :access_token, :created_at, :updated_at

  # def user_id
  #   object.id
  # end

  def token_type
    'Bearer'
  end

end