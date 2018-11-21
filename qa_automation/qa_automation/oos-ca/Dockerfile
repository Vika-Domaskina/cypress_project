FROM cypress/base
WORKDIR /app
# Copy our test page and test files
COPY cypress.json ./
COPY package.json ./
COPY cypress ./cypress
RUN npm i cypress
RUN apt-get install xvfb libgtk2.0-0 libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
RUN chmod -R 777 .
RUN chmod +x cypress
# confirm the cypress install
RUN ./node_modules/.bin/cypress verify