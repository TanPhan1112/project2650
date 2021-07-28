# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app/frontend

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY /frontend/yarn.lock ./

# Install production dependencies.
RUN yarn install

# Create and change to the app directory.
WORKDIR /usr/src/app/backend

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY /backend/yarn.lock ./

# Install production dependencies.
RUN yarn install

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD [ "yarn", "run", "startnocompile" ]