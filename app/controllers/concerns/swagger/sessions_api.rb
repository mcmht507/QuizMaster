module Swagger::SessionsApi
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
          key :name, :body
          key :in, :body
          key :description, 'User Object'
          key :required, true
          schema do
            key :'$ref', :LoginUser
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