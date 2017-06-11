Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :questions

  get '/', to: 'questions#index'

  resources :questions do
    member do
      put "like", to: "questions#like"
    end
  end
end
