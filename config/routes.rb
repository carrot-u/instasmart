Rails.application.routes.draw do

  root 'home#index'

  get 'auth/:provider', to: 'sessions#create'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  get 'sessions/create'

  get 'sessions/destroy'

  get 'home', to: 'landing_page#index'

  resources :questions do
    member do
      put "like" => "questions#like"
      put "dislike" => "questions#dislike"
      put "unlike" => "questions#unlike"
      put "undislike" => "questions#undislike"
    end
    resources :comments, module: :questions

    resources :answers do
      member do
        put "like" => "answers#like"
        put "dislike" => "answers#dislike"
        put "unlike" => "answers#unlike"
        put "undislike" => "answers#undislike"
      end
    end


  end
  resources :answers do
    resources :comments, module: :answers
  end

end
