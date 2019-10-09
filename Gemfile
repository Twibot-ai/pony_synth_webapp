source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.4'

# Full-stack web application framework. (https://rubyonrails.org)
gem 'rails', '~> 6.0.0'

# Pg is the Ruby interface to the {PostgreSQL RDBMS}[http://www.postgresql.org/] (https://bitbucket.org/ged/ruby-pg)
gem 'pg', '>= 0.18', '< 2.0'

# Puma is a simple, fast, threaded, and highly concurrent HTTP 1.1 server for Ruby/Rack applications (http://puma.io)
gem 'puma', '~> 3.11'

# Sass adapter for the Rails asset pipeline. (https://github.com/rails/sass-rails)
gem 'sass-rails', '~> 5'

# Use webpack to manage app-like JavaScript modules in Rails (https://github.com/rails/webpacker)
gem 'webpacker', '~> 4.0'

# Turbolinks makes navigating your web application faster (https://github.com/turbolinks/turbolinks)
gem 'turbolinks', '~> 5'

# Create JSON structures via a Builder-style DSL (https://github.com/rails/jbuilder)
gem 'jbuilder', '~> 2.7'

# A Ruby client library for Redis (https://github.com/redis/redis-rb)
gem 'redis', '~> 4.0'

# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Boot large ruby/rails apps faster (https://github.com/Shopify/bootsnap)
gem 'bootsnap', '>= 1.4.2', require: false

# A high-level architecture for Ruby and Rails. (http://trailblazer.to)
gem 'trailblazer'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
# Timezone Data for TZInfo (http://tzinfo.github.io)
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Simple, efficient background processing for Ruby (http://sidekiq.org)
gem 'sidekiq', '~> 5.2'

# Client library for easily using the Cloudinary service (http://cloudinary.com)
gem 'cloudinary', require: false

# Rails ActiveStorage adapter for cloudinary (https://github.com/0sc/activestorage-cloudinary-service)
gem 'activestorage-cloudinary-service'

group :development, :test do

  # Ruby fast debugger - base + CLI (https://github.com/deivid-rodriguez/byebug)
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]

  # Better error page for Rails and other Rack apps (https://github.com/BetterErrors/better_errors)
  gem 'better_errors'

  # Retrieve the binding of a method's caller. Can also retrieve bindings even further up the stack. (http://github.com/banister/binding_of_caller)
  gem 'binding_of_caller'

  # RSpec for Rails (https://github.com/rspec/rspec-rails)
  gem 'rspec-rails', '~> 3.8'

  # factory_bot_rails provides integration between factory_bot and rails 4.2 or newer (https://github.com/thoughtbot/factory_bot_rails)
  gem 'factory_bot_rails'

  # Easily generate fake data (https://github.com/faker-ruby/faker)
  gem 'faker'

  # Use mailcatcher for mailing gem 'mailcatcher', require: false

  # IDE interface for ruby-debug. (https://github.com/ruby-debug/ruby-debug-ide)
  gem 'ruby-debug-ide', '0.7.0.beta4', require: false

  # debase is a fast implementation of the standard Ruby debugger debug.rb for Ruby 2.0 (https://github.com/denofevil/debase)
  gem 'debase', '0.2.2', require: false

  # Autoload dotenv in Rails. (https://github.com/bkeepers/dotenv)
  gem 'dotenv-rails'
end

group :development do

  # A debugging tool for your Ruby on Rails applications. (https://github.com/rails/web-console)
  gem 'web-console', '>= 3.3.0'

  # Listen to file modifications (https://github.com/guard/listen)
  gem 'listen', '>= 3.0.5', '< 3.2'

  # Rails application preloader (https://github.com/rails/spring)
  gem 'spring'

  # Makes spring watch files using the listen gem. (https://github.com/jonleighton/spring-watcher-listen)
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Automatic Ruby code style checking tool. (https://github.com/rubocop-hq/rubocop)
  gem 'rubocop', '~> 0.74.0', require: false

  # gem 'overcommit'

  # Annotate your Rails controllers with route info. (https://github.com/nshki/chusaku)
  gem 'chusaku', require: false

  # Annotates Rails Models, routes, fixtures, and others based on the database schema. (http://github.com/ctran/annotate_models)
  gem 'annotate', require: false

  # Add comments to your Gemfile with each dependency's description. (https://github.com/ivantsepp/annotate_gem)
  gem 'annotate_gem', require: false

  # Security vulnerability scanner for Ruby on Rails. (https://brakemanscanner.org)
  gem 'brakeman', require: false
end

group :test do

  # Capybara aims to simplify the process of integration testing Rack applications, such as Rails, Sinatra or Merb (https://github.com/teamcapybara/capybara)
  gem 'capybara', '>= 2.15'

  # The next generation developer focused tool for automated testing of webapps (https://github.com/SeleniumHQ/selenium)
  gem 'selenium-webdriver'

  # Easy download and use of browser drivers. (https://github.com/titusfortner/webdrivers)
  gem 'webdrivers'
end
