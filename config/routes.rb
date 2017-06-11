Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  resources :questions do
    resources :comments
    resources :answers
    member do
      put "like", to: "questions#like"
      put "unlike", to: "questions#unlike"
    end
  end
  resources :tags

  get '/active', to: 'questions#active'
  get '/inactive', to: 'questions#inactive'
  get '/popular', to: 'questions#popular'
  get '/', to: 'questions#active'

end
