Camp6::Application.routes.draw do
  root :to => "static_pages#index"
  devise_for :users
  
  resources :projects do
    resources :todo_lists do
      resources :todos
    end
    resources :notes
  end
  
  get 'projects/:project_id/calendar', :to => 'todo_lists#calendar_todos'
  
end
