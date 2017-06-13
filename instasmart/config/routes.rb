Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users

  resources :questions do
    resources :answers do
      resources :comments
      member do
        put "like", to: "answers#like"
        put "unlike", to: "answers#unlike"
      end
    end
    member do
      put "like", to: "questions#like"
      put "unlike", to: "questions#unlike"
    end
  end

  resources :answers

  resources :tags

  get '/active', to: 'questions#active'
  get '/inactive', to: 'questions#inactive'
  get '/popular', to: 'questions#popular'
  get '/', to: 'questions#active'

end
