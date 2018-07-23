module Swagger::AnswerSchema
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_schema :PostAnswer do
      key :required, [:answer]
      property :answer do
        key :'$ref', :Answer
      end
    end

    swagger_schema :Answer do
      key :required, [:question_id, :content]
      property :question_id do
        key :type, :integer
      end
      property :content do
        key :type, :string
      end
      property :is_correct do
        key :type, :boolean
      end
    end

    swagger_schema :PostSolveAnswer do
      key :required, [:answer]
      property :answer do
        key :'$ref', :SoleveQuestion
      end
    end

    swagger_schema :SoleveQuestion do
      property :question_id do
        key :type, :integer
      end
      property :content do
        key :type, :string
      end
    end

    swagger_schema :ResponseSolve do
      property :result do
        key :type, :boolean
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
      property :is_correct do
        key :type, :boolean
      end
      # property :created_user do
      #   key :type, :string
      # end
      # property :updated_at do
      #   key :type, :string
      # end
      property :updated_user do
        key :type, :string
      end
      property :updated_at do
        key :type, :string
      end
    end
  end
end