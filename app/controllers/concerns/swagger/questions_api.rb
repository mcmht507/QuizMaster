module Swagger::QuestionsApi
  extend ActiveSupport::Concern
  include Swagger::Blocks
  include UtilsFunc

  included do
    include Swagger::ErrorSchema

    swagger_path '/questions' do
      operation :get do
        security do
          key :petstore_auth,[]
        end
        parameter do
          key :name, :notAnswer
          key :in, :query
          key :description, 'not answer response'
          key :type, :boolean
        end
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
        key :operationId, :create_question

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
            key :'$ref', :ResponsePostQuestion
          end
        end

        extend Swagger::ErrorResponses::InvalidParameterError
        extend Swagger::ErrorResponses::ConflictError

      end
    end

    swagger_path '/questions/{question_id}' do
      parameter do
        key :name, :question_id
        key :in, :path
        key :description, 'QuestionID'
        key :type, :integer
        key :required, true
      end

      operation :get do
        security do
          key :petstore_auth,[]
        end
        key :description, 'Finds the specified question'
        key :operationId, :find_question_by_id

        response 200 do
          key :description, 'User specified by its ID'
          schema do
            key :'$ref', :ResponseQuestion
          end
        end

        extend Swagger::ErrorResponses::NotFoundError
      end

      operation :patch do
        security do
          key :petstore_auth,[]
        end
        key :description, 'Updates the user'
        key :operationId, :update_question
        parameter do
          key :name, :body
          key :in, :body
          key :description, 'Question Object'
          key :required, true
          schema do
            key :'$ref', :PostQuestion
          end
        end
        response 200 do
          key :description, 'Updated question'
          schema do
            key :'$ref', :ResponseQuestion
          end
        end

        extend Swagger::ErrorResponses::InvalidParameterError
        extend Swagger::ErrorResponses::NotFoundError
      end

      operation :delete do
        security do
          key :petstore_auth,[]
        end
        key :description, 'Deletes the question and delete answer related to questionn'
        key :operationId, :delete_user

        response 204 do
          key :description, 'The question was deleted'
        end

        extend Swagger::ErrorResponses::NotFoundError
      end
    end
  end
end