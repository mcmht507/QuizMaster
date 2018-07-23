module Swagger::UserSchema
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_schema :PostAnswee do
      key :required, [:answer]
      property :answer do
        key :'$ref', :Answer
      end
    end

    swagger_schema :Answer do
      key :required, [:contend, :email]
      property :question_id do
        key :type, :integer
      end
      property :content do
        key :type, :string
      end
    end

    swagger_schema :ResponseAnswer do
      property :answer_id do
        key :type, :string
      end
      property :question_id do
        key :type, :integer
      end
      property :content do
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