Camp6::Application.routes.draw do
  root :to => "static_pages#index"
  devise_for :users
  
  resources :projects do
    resources :todo_lists do
      resources :todos
      resources :comments
    end
    
    resources :notes do
      resources :comments
    end
    
  end
  
  get 'projects/:project_id/calendar', :to => 'todo_lists#calendar_todos'
end