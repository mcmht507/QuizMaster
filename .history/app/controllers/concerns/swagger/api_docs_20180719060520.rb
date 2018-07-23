module Swagger::ApiDocs
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_root do
      key :swagger, '2.0'
      info do
        key :version, '1.0.0'
        key :title, 'API QuizMaster App'
        key :description, 'API QuizMaster App'
      end
      key :basePath, '/'
      key :consumes, ['application/json']
      key :produces, ['application/json']
      security_definition :petstore_auth do
        key :type, :apiKey
        key :name, :Authorization
        key :in, :header
      end

      extend Swagger::Parameters
    end

    SWAGGERED_CLASSES = [
      User,
      UsersController,
      SessionsController,
      Question,
      QuestionsController,
      Answer,
      AnswersController,
      Category,
      AnswersController,
      self
    ].freeze
  end

  def root_json
    Swagger::Blocks.build_root_json(SWAGGERED_CLASSES)
  end
end