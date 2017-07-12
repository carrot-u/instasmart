Rails.application.routes.draw do

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
