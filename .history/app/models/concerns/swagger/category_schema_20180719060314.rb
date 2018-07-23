module Swagger::CategorySchema
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_schema :ResponseCategory do
      property :category_id do
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
      property :created_at do
        key :type, :string
      end
      property :updated_at do
        key :type, :string
      end
    end
  end
end