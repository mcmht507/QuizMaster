module Swagger::UsersApi
  extend ActiveSupport::Concern
  include Swagger::Blocks
  include UtilsFunc

  included do
    include Swagger::ErrorSchema

    swagger_path '/users' do
      operation :post do
        # security do
        #   key :petstore_auth,[]
        # end
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
            key :'$ref', :ResponseSecureUser
          end
        end

        extend Swagger::ErrorResponses::InvalidParameterError
        extend Swagger::ErrorResponses::ConflictError

      end
    end

    swagger_path '/users/myself' do
      operation :get do
        security do
          key :petstore_auth,[]
        end
        key :description, 'Finds the Login User'
        key :operationId, :find_user_by_id

        response 200 do
          key :description, 'Finds the Login User'
          schema do
            key :'$ref', :ResponseSecureUser
          end
        end

        extend Swagger::ErrorResponses::NotFoundError
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
        security do
          key :petstore_auth,[]
        end
        key :description, 'Finds the specified user'
        key :operationId, :find_user_by_id

        response 200 do
          key :description, 'User specified by its ID'
          schema do
            key :'$ref', :ResponseSecureUser
          end
        end

        extend Swagger::ErrorResponses::NotFoundError
      end
    end

      # operation :patch do
      #   key :description, 'Updates the user'
      #   key :operationId, :update_user

      #   parameter :user

      #   response 200 do
      #     key :description, 'Updated user'
      #     schema do
      #       key :'$ref', :UserOutput
      #     end
      #   end

      #   extend Swagger::ErrorResponses::InvalidParameterError
      #   extend Swagger::ErrorResponses::NotFoundError
      # end

      # operation :delete do
      #   key :description, 'Deletes the user'
      #   key :operationId, :delete_user

      #   response 204 do
      #     key :description, 'The user was deleted'
      #   end

      #   extend Swagger::ErrorResponses::NotFoundError
      # end
  end
end