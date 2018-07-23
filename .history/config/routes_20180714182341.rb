Rails.application.routes.draw do
  resources :users

  get '/docs' => redirect('http://localhost:3000/swagger/dist/index.html?url=http://localhost:3000/api-docs.json')
  # users service
  get '/users/:user_id', to: 'users#show'
  post '/users', to: 'users#create'
  # constraints subdomain: 'api' do
  #   # some namespace
  # end

  scope module: 'api' do
    scope module: 'v1' do
      get '/' => 'home#index_public'
    end
    namespace :v1 do7
      resources :users
    end
  end
end