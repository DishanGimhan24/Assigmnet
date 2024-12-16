# Use official Node.js image as base image
FROM node:18

# Set the working directory
WORKDIR /test

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 8070

# Command to run the app
CMD ["npm", "start"]
