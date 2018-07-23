module Swagger::QuestionSchema
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

    swagger_schema :SoleveQuestion do
      key :required, [:question]
      property :question do
        key :'$ref', :Question
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