Rails.application.routes.draw do
  get "/current_user", to: "current_user#index"

  devise_for :users, path_names: {
    sign_in: "login",
    sign_out: "logout",
    registration: "signup"
  },
  controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations"
  }
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    namespace :v1 do
      resources :challenges
    end
  end
end
