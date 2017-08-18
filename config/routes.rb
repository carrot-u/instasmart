Rails.application.routes.draw do

  post '/auth/:provider/callback', to: 'sessions#create'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:new, :create, :destroy]

  get 'sessions/create'

  get 'sessions/destroy'

  get 'home', to: 'home#index'
  root to: 'sessions#new'
  get 'questions', to: 'questions#index'

  resources :users

  put "questions/:id/update" => "questions#update"
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
