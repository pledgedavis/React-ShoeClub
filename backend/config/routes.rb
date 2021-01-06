Rails.application.routes.draw do
  resources :shoe_models
  resources :carts
  resources :lineitems
  resources :brands
  resources :shoes
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
