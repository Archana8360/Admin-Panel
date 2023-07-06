Rails.application.routes.draw do
  resources :people do
    patch :update_status, on: :member
  end



  resources :clients do
    patch :update_status, on: :member
  end

  post 'clients/page', to: "clients#page"




  
  get 'search',to: "clients#search"
  post 'users/sort',to: "clients#sortusers"
  post 'emails/sort',to: "clients#sortemails"
  post 'status/sort',to: "clients#sortstatus"


  devise_for :users, :skip => [:registrations], controllers: { sessions: 'sessions' }
  devise_scope :user do
    authenticated :user do
      root 'admin/admin#dashboard', as: :authenticated_root
    end
    unauthenticated do
      root 'devise/sessions#new', as: :unauthenticated_root
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
   # Singular resource for the Profile model

   get 'profile/edit', to: 'admin/admin#edit_profile', as: :edit_profile
   patch 'profile', to: 'admin/admin#update_profile', as: :profile
   get 'project' , to: 'admin/admin#project_management'
   get 'news' , to: 'admin/admin#news_management'

  end
