# module Swagger::CategoriesApi
# extend ActiveSupport::Concern
# include Swagger::Blocks
# include UtilsFunc

# included do
#   include Swagger::ErrorSchema

#   swagger_path '/categories' do
#     operation :get do
#       security do
#         key :petstore_auth,[]
#       end
#       key :description, 'Get all Question'
#       key :operationId, :get_all_question

#       response 200 do
#         key :description, 'All Questions'
#         schema type: :array do
#           items do
#             key :'$ref', :ResponseCategory
#           end
#         end
#       end
#     end
#     extend Swagger::ErrorResponses::InvalidParameterError
#     extend Swagger::ErrorResponses::ConflictError
#     end
#   end
# end

module Swagger::CategoriesApi
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_schema :PostQuestion do
      key :required, [:question]
      property :question do
        key :'$ref', :Question
      end
    end

    swagger_schema :Question do
      key :required, [:contend, :email]
      property :content do
        key :type, :string
      end
      property :answer do
        key :type, :string
      end
      property :category_id do
        key :type, :integer
      end
    end

    swagger_schema :ResponseQuestion do
      property :question_id do
        key :type, :string
      end
      property :content do
        key :type, :string
      end
      property :category do
        key :'$ref', :Category
      end
      property :answer do
        key :type, :string
      end
      property :user_id do
        key :type, :string
      end
      # property :created_user do
      #   key :type, :string
      # end
      # property :updated_user do
      #   key :type, :string
      # end
      property :created_at do
        key :type, :string
      end
      property :updated_at do
        key :type, :string
      end
    end

    swagger_schema :Category do
      property :category_id do
        key :type, :integer
      end
      property :content do
        key :type, :string
      end
      property :created_at do
        key :type, :string
      end
      property :updated_at do
        key :type, :string
      end
    end
  end
end