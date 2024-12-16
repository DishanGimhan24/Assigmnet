# Use official Node.js image as base image
FROM node:18 AS build

# Set the working directory
WORKDIR /my-angular-app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Serve the Angular app using a simple HTTP server
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /my-angular-app/dist/my-angular-app /usr/share/nginx/html


# Expose the default Nginx port
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
