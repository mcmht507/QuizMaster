module Swagger::UserSchema
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
      # property :user_id do
      #   key :type, :string
      # end
      property :content do
        key :type, :string
      end
      property :email do
        key :type, :string
      end
    end

    swagger_schema :ResponseUser do
      property :user_id do
        key :type, :string
      end
      property :name do
        key :type, :string
      end
      property :email do
        key :type, :string
      end
      property :created_user do
        key :type, :string
      end
      property :created_at do
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