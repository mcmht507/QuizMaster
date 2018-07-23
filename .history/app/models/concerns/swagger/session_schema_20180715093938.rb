module Swagger::SessionSchema
  extend ActiveSupport::Concern
  include Swagger::Blocks

  included do
    swagger_schema :LoginUser do
      key :required, [:email, :password]
      property :email do
        key :type, :string
      end
      property :password do
        key :type, :string
      end
    end
  end
end