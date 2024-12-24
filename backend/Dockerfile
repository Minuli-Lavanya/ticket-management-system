# Use Node.js official image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /server

# Copy package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code into the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Set environment variables for production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
