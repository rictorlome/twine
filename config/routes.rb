Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :update]
    resources :documents, only: [:create]

    get 'documents/:path', to: 'documents#pull'

    resource :session, only: [:destroy]
  end

  mount ActionCable.server => '/cable'
end
