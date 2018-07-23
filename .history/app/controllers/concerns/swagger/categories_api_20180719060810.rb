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