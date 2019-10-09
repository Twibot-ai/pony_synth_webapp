web: bin/rails server -p $PORT -e $RAILS_ENV
worker: bundle exec sidekiq -t 25
release: chmod u+x ./config/release_phase.sh && ./config/release_phase.sh
