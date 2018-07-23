module Swagger::UserSchema
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_schema :PostAnswee do
      key :required, [:question]
      property :question do
        key :'$ref', :Question
      end
    end

    swagger_schema :Question do
      key :required, [:contend, :email]
      # property :user_id do
      #   key :type, :string
      # end
      property :content do
        key :type, :string
      end
      property :category do
        key :type, :integer
      end
      property :email do
        key :type, :string
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
        key :type, :integer
      end
      property :answer do
        key :type, :string
      end
      property :user_id do
        key :type, :string
      end
      property :created_user do
        key :type, :string
      end
      property :updated_at do
        key :type, :string
      end
      property :updated_user do
        key :type, :string
      end
      property :updated_at do
        key :type, :string
      end
    end
  end
end