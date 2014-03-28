Camp6::Application.routes.draw do
  root :to => "static_pages#index"
  get 'projects/:project_id/notes/:note_id/comments', :to => "comments#note_index"
  get 'projects/:project_id/todo_lists/:todo_list_id/comments', :to => "comments#todo_list_index"
  devise_for :users
  
  resources :projects do
    resources :todo_lists do
      resources :todos
      resources :comments
    end
    
    resources :notes do
      resources :comments
    end
    
    resources :project_memberships, :only => [:index]
  end
  
  resources :project_memberships, :except => [:index]
  get 'projects/:project_id/calendar', :to => 'todo_lists#calendar_todos'
  

end