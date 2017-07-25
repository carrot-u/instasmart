Rails.application.routes.draw do

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  get 'sessions/create'

  get 'sessions/destroy'

  root 'landing_page#index'

  get 'home', to: 'landing_page#index'

  resources :questions do
    resources :answers do
      resources :comments
    end
  end

  resources :answers

  resources :comments

end
