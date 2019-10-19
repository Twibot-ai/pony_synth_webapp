FROM ruby:2.6.4

ENV RAILS_ENV=production \
    NODE_ENV=production

ARG APP_DIR=webapp

# Install essentials

RUN curl -sS http://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq \
    && apt-get install -y nodejs libpq-dev build-essential \
    && apt-get install -y --no-install-recommends yarn \
    && apt-get clean autoclean \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt /var/lib/dpkg /var/lib/cache /var/lib/log

WORKDIR ${APP_DIR}

# Install gems
COPY Gemfile* ./
RUN bundle install \
    && rm -rf /usr/local/bundle/cache/* \
    && find /usr/local/bundle/gems/ -name "*.c" -delete \
    && find /usr/local/bundle/gems/ -name "*.o" -delete

# Install packages
ADD package*.json yarn.* ./
RUN yarn install --no-progress --frozen-lockfile --no-cache --production

RUN wget -P ./lib/python/model/ \
         -O model_twilight.pth \
         https://github.com/Twibot-ai/pony_synth_script/releases/download/1.0/checkpoint_step200k_22hz_16bit_twilight.pth \
    && wget -P ./lib/python/scripts/ \
            -O synthesis \
            https://github.com/Twibot-ai/pony_synth_script/releases/download/1.0/linux_executable_lighter.lighter

COPY . ./

# Precompile assets
RUN SECRET_KEY_BASE=$(rake secret) bundle exec bin/rails assets:precompile \
    && rm -rf /${APP_DIR}/tmp/cache/assets/

#RUN rails db:migrate

#CMD bin/rails s
