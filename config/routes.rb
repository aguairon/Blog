Rails.application.routes.draw do
  devise_for :admins
  get 'welcome/index'

  resources :articles do
  resources :comments
  end
  resources :periods
  resources :characters

  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
