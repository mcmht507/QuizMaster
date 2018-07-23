Rails.application.routes.draw do
  # devise_for :users
  # user Service
  devise_for :user, only: []
  resources :users, param: :user_id
  get '/users/myself', to: 'api_docs#index'
  resource :login, only: [:create], controller: :sessions
  # resource :users, only: [:create]
  # swagger service
  get '/docs' => redirect('http://localhost:3000/swagger/dist/index.html?url=http://localhost:3000/api-docs.json')
  get 'api-docs', to: 'api_docs#index'
  # resources :users, only: [:create]
  # questions service
  resources :questions, param: :question_id
  # answer service
  resources :answers

  # post '/users', to: 'users#create'
  get '/users/:user_id', to: 'users#show'
  # constraints subdomain: 'api' do
  #   # some namespace
  # end

  # scope module: 'api' do
  #   scope module: 'v1' do
  #     get '/' => 'home#index_public'
  #   end
  #   namespace :v1 do
  #     resources :users
  #   end
  # end
end
