module Swagger::AnswersApi
  extend ActiveSupport::Concern
  include Swagger::Blocks
  include UtilsFunc

  included do
    include Swagger::ErrorSchema

  swagger_path '/answers/solve' do
    operation :post do
      security do
        key :petstore_auth,[]
      end
      key :description, 'solve a question'
      key :operationId, :solve_question

      parameter do
        key :name, :body
        key :in, :body
        key :description, 'Question Object'
        key :required, true
        schema do
          key :'$ref', :PostSolveAnswer
        end
      end

      response 201 do
        key :description, 'Created Solve'
        schema do
          key :'$ref', :ResponseAnswer
        end
      end

      extend Swagger::ErrorResponses::InvalidParameterError
      extend Swagger::ErrorResponses::ConflictError

      end
    end
  end
end