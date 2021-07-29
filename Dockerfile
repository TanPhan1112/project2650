# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:12-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy local code to the container image.
COPY . ./

# Create and change to the app directory.
WORKDIR frontend

# Install production dependencies.
RUN yarn install && yarn build

# Create and change to the app directory.
WORKDIR ../backend

# Install production dependencies.
RUN yarn install

# Run the web service on container startup.
CMD [ "sh", "-c", "PORT=8080 npm run dev" ]
