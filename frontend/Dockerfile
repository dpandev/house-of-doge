# Pull Docker Hub base image
FROM mhart/alpine-node:14.17.3
# Set working directory
WORKDIR /frontend
# Install app dependencies
COPY package*.json ./
RUN npm install
# Copy app to container
COPY ./ ./
# Make port 3000 available to the world outside this container
EXPOSE 3000
# Run the "dev" script in package.json
CMD ["npm", "start"]