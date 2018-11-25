FROM cypress/base
WORKDIR /app
RUN npm install
RUN npm install cypress --save-dev 
RUN npm install --save-dev cypress-cucumber-preprocessor
# Copy our test page and test files
COPY cypress.json ./
COPY cypress ./cypress
COPY cypress-package.json package.json
# Confirm the cypress install
RUN npm link 
RUN npm link cypress-cucumber-preprocessor
# Running tests on container startup
CMD ./node_modules/.bin/cypress run \