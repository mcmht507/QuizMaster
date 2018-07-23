module Api
  module V1
    class PostsController < ApplicationController

      # respond_to :json

      # swagger_controller :posts, 'Posts'

      # swagger_api :index do
      #   summary 'Returns all posts'
      #   notes 'Notes...'
      # end

      def index
        @posts = Post.all

        render json: @posts, status: :ok
      end
    end
  end
end