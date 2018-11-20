FROM cypress/browsers:chrome65-ff57
RUN npm i cypress
WORKDIR /app
# Copy our test page and test files
COPY cypress.json ./
COPY package.json ./
COPY cypress ./cypress
RUN chmod -R 777 .
RUN chmod +x cypress
# confirm the cypress install
RUN cypress verify