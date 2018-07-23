module Swagger::CategoriesApi
  extend ActiveSupport::Concern
  include Swagger::Blocks
  include UtilsFunc

  included do
    include Swagger::ErrorSchema

    swagger_path '/Categories' do
      operation :get do
        security do
          key :petstore_auth,[]
        end
        parameter do
          key :name, :user_id
          key :in, :query
          key :description, 'QuestionID'
          key :type, :string
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
      extend Swagger::ErrorResponses::InvalidParameterError
      extend Swagger::ErrorResponses::ConflictError
      end
    end
  end
end