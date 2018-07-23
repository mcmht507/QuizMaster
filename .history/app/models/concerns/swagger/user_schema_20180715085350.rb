module Swagger::UserSchema
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_schema :PostUser do
      key :required, [:user_id, :name, :email]
      property :user do
        key :'$ref', :User
      end
    end

    swagger_schema :User do
      key :required, [:user_id, :name, :email]
      property :user_id do
        key :type, :string
      end
      property :name do
        key :type, :string
      end
      property :email do
        key :type, :string
      end
      property :password do
        key :type, :string
      end
      # property :password_confirmation do
      #   key :type, :string
      # end
    end


    swagger_schema :ResponseUser do
      property :user_id do
        key :type, :string
      end
      property :name do
        key :type, :string
      end
      property :email do
        key :type, :string
      end
      property :created_user do
        key :type, :string
      end
      property :created_at do
        key :type, :string
      end
      property :updated_user do
        key :type, :string
      end
      property :updated_at do
        key :type, :string
      end
    end
  end
end