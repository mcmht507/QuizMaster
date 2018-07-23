module Swagger::UsersApi
  extend ActiveSupport::Concern
  include Swagger::Blocks
  include UtilsFunc

  included do
    include Swagger::ErrorSchema

    swagger_path '/login' do
      operation :post do
        key :description, 'login user'
        key :operationId, :login_session

        parameter do
          key :name, :email
          key :in, :formData
          key :description, 'User Email'
          key :required, true
          key :type, :string
          end
        end
        parameter do
          key :name, :password
          key :in, :formData
          key :description, 'User Password'
          key :required, true
          key :type, :string
          end
        end

        response 201 do
          key :description, 'login success'
          schema do
            key :'$ref', :ResponseUser
          end
        end

        extend Swagger::ErrorResponses::InvalidParameterError

      end
    end
  end
end