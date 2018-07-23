Rails.application.routes.draw do
  devise_for :users
  resources :users, param: :user_id
  resource :login, only: [:create], controller: :sessions

  get '/docs' => redirect('http://localhost:3000/swagger/dist/index.html?url=http://localhost:3000/api-docs.json')
  get 'api-docs', to: 'api_docs#index'
  # users service
  get '/users/:user_id', to: 'users#show'
  post '/users', to: 'users#create'
  constraints subdomain: 'api' do
    # some namespace
  end

  scope module: 'api' do
    scope module: 'v1' do
      get '/' => 'home#index_public'
    end
    namespace :v1 do
      resources :users
    end
  end
end
