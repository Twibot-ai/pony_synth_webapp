Rails.application.routes.draw do
  default_url_options host: Rails.env.development? ? 'localhost:3000' : ENV['HOST']

  root 'home#main'
end
