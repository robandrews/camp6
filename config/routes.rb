Camp6::Application.routes.draw do
  root :to => "static_pages#index"
  devise_for :users
  resources :projects

end
