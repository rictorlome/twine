Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
<<<<<<< HEAD

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :update]
    resources :channels, only: [:index, :create]
  end  
=======
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :update]
    resource :session, only: [:create, :destroy]
  end

>>>>>>> Implement auth with devise
end
