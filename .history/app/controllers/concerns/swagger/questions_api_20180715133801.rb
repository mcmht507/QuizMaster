module Swagger::QuestionsApi
  extend ActiveSupport::Concern
  include Swagger::Blocks
  include UtilsFunc

  included do
    include Swagger::ErrorSchema

    swagger_path '/questions' do
      parameter do
        key :name, :user_id
        key :in, :question_id
        key :description, 'QuestionID'
        key :type, :integer
      end
      operation :get do
        key :description, 'Get all Question'
        key :operationId, :get_all_question

        response 200 do
          key :description, 'All Questions'
          schema type: :array do
            items do
              key :'$ref', :ResponseQuestion
            end
          end
        end
      end

      operation :post do
        security do
          key :petstore_auth,[]
        end
        key :description, 'Creates a question'
        key :operationId, :create_user

        parameter do
          key :name, :body
          key :in, :body
          key :description, 'Question Object'
          key :required, true
          schema do
            key :'$ref', :PostQuestion
          end
        end
        response 201 do
          key :description, 'Created user'
          schema do
            key :'$ref', :ResponseQuestion
          end
        end

        extend Swagger::ErrorResponses::InvalidParameterError
        extend Swagger::ErrorResponses::ConflictError

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
            key :'$ref', :ResponseUser
          end
        end

        extend Swagger::ErrorResponses::NotFoundError
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
end