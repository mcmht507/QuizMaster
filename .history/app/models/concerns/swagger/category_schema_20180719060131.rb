module Swagger::CategorySchema
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
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
      property :created_id do
        key :type, :integer
      end
      property :updated_at do
        key :type, :string
      end
    end
  end
end