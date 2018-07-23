module Swagger::UsersApi
  extend ActiveSupport::Concern
  include Swagger::Blocks
  include UtilsFunc

  included do
    include Swagger::ErrorSchema

    swagger_path '/login' do
      operation :post do
        key :description, 'Creates a user'
        key :operationId, :create_user

        parameter do
          key :name, :body
          key :in, :body
          key :description, 'User Object'
          key :required, true
          schema do
            key :'$ref', :PostUser
          end
        end
        response 201 do
          key :description, 'Created user'
          schema do
            key :'$ref', :ResponseUser
          end
        end

        extend Swagger::ErrorResponses::InvalidParameterError

      end
    end

    swagger_path '/users/{user_id}' do
      parameter do
        key :name, :user_id
        key :in, :path
        key :description, 'UserID'
        key :type, :string
        key :required, true
      end

      operation :get do
        key :description, 'Finds the specified user'
        key :operationId, :find_user_by_id

        response 200 do
          key :description, 'User specified by its ID'
          schema do
            key :'$ref', :ResponseUser
          end
        end

        extend Swagger::ErrorResponses::NotFoundError
      end
    end
  end
end