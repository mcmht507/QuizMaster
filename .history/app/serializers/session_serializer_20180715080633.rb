class SessionSerializer < ActiveModel::Serializer

  attributes :email, :token_type, :user_id, :access_token,:updated_at, :created_at

  def user_id
    object.id
  end

  def token_type
    'Bearer'
  end

end