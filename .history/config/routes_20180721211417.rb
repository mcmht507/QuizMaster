Rails.application.routes.draw do
  # devise_for :users
  # user Service
  devise_for :user, only: []
  get '/users/myself', to: 'users#myself'
  resources :users, param: :user_id
  resource :login, only: [:create], controller: :sessions
  # category sercice
  get '/categories', to: 'categories#index'

  # swagger service
  get '/docs' => redirect('http://localhost:3000/swagger/dist/index.html?url=http://localhost:3000/api-docs.json')
  get 'api-docs', to: 'api_docs#index'
  # resources :users, only: [:create]
  # questions service
  post '/answers/soleve', to: 'questions#solve'

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
