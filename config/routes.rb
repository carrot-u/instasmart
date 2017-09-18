Rails.application.routes.draw do

# Comment Routes
  get 'comments/new'
  get 'comments/create'
  get 'comments/edit'
  get 'comments/update'

  root to: 'sessions#new'

  post '/auth/:provider/callback', to: 'sessions#create'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:new, :create, :destroy]
  get 'sessions/create'
  get 'sessions/destroy'

  get 'home', to: 'home#index'

  resources :users

  get 'questions', to: 'questions#index'

# Search related routes
  post 'questions/search', to: 'questions#search'
  post 'questions/suggestions', to: 'questions#search_suggestions'
  post 'users/suggestions', to: 'users#search_suggestions'



  put "questions/:id/update" => "questions#update"
  resources :questions do

    member do
      put "like" => "questions#like"
      put "dislike" => "questions#dislike"
      put "unlike" => "questions#unlike"
      put "undislike" => "questions#undislike"
    end
    resources :comments

    resources :answers do
      member do
        put "like" => "answers#like"
        put "dislike" => "answers#dislike"
        put "unlike" => "answers#unlike"
        put "undislike" => "answers#undislike"
      end
      resources :comments
    end
  end

  resources :answers do 
    resources :comments
  end

  resources :comments


end
