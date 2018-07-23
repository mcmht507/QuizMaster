module Swagger::AnswersApi
  extend ActiveSupport::Concern
  include Swagger::Blocks
  include UtilsFunc

  included do
    include Swagger::ErrorSchema

    swagger_path '/answers' do
      # parameter do
      #   key :name, :user_id
      #   key :in, :question_id
      #   key :description, 'UserID'
      #   key :type, :integer
      # end
      # operation :get do
      #   key :description, 'Get all Answers'
      #   key :operationId, :get_all_question

      #   response 200 do
      #     key :description, 'All answers'
      #     schema type: :array do
      #       items do
      #         key :'$ref', :ResponseQuestion
      #       end
      #     end
      #   end
      # end

      operation :post do
        security do
          key :petstore_auth,[]
        end
        key :description, 'Creates a answer'
        key :operationId, :create_answer

        parameter do
          key :name, :body
          key :in, :body
          key :description, 'Answer Object'
          key :required, true
          schema do
            key :'$ref', :PostAnswer
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

  #   swagger_path '/question/{question_id}' do
  #     parameter do
  #       key :name, :question_id
  #       key :in, :path
  #       key :description, 'QuestionID'
  #       key :type, :integer
  #       key :required, true
  #     end

  #     operation :get do
  #       security do
  #         key :petstore_auth,[]
  #       end
  #       key :description, 'Finds the specified question'
  #       key :operationId, :find_question_by_id

  #       response 200 do
  #         key :description, 'User specified by its ID'
  #         schema do
  #           key :'$ref', :ResponseQuestion
  #         end
  #       end

  #       extend Swagger::ErrorResponses::NotFoundError
  #     end

  #     operation :patch do
  #       key :description, 'Updates the user'
  #       key :operationId, :update_question

  #       parameter :user

  #       response 200 do
  #         key :description, 'Updated question'
  #         schema do
  #           key :'$ref', :ResponseQuestion
  #         end
  #       end

  #       extend Swagger::ErrorResponses::InvalidParameterError
  #       extend Swagger::ErrorResponses::NotFoundError
  #     end

  #     operation :delete do
  #       key :description, 'Deletes the question'
  #       key :operationId, :delete_user

  #       response 204 do
  #         key :description, 'The question was deleted'
  #       end

  #       extend Swagger::ErrorResponses::NotFoundError
  #     end
  #   end
  # end
end