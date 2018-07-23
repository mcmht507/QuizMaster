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
        key :type, :bearer
        # key :authorizationUrl, 'http://swagger.io/api/oauth/dialog'
        # key :flow, :implicit
        # scopes 'write:pets' => 'modify pets in your account' do
        #   key 'read:pets', 'read your pets'
        end
      end
      extend Swagger::Parameters
    end

    SWAGGERED_CLASSES = [
      User,
      UsersController,
      SessionsController,
      self
    ].freeze
  end

  def root_json
    Swagger::Blocks.build_root_json(SWAGGERED_CLASSES)
  end
end