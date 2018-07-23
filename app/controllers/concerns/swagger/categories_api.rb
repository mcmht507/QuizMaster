module Swagger::CategoriesApi
  extend ActiveSupport::Concern
  include Swagger::Blocks
  include UtilsFunc

  included do
    include Swagger::ErrorSchema

    swagger_path '/categories' do
      operation :get do
        security do
          key :petstore_auth,[]
        end
        key :description, 'Get all Category'
        key :operationId, :get_all_category

        response 200 do
          key :description, 'All categories'
          schema type: :array do
            items do
              key :'$ref', :ResponseCategory
            end
          end
        end
        extend Swagger::ErrorResponses::InvalidParameterError
        extend Swagger::ErrorResponses::ConflictError
      end
    end
  end
end