# Use an official Node.js 14 runtime as the base image
FROM node:16.15.0-alpine
 
# Set the working directory in the container
WORKDIR /app
 
# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
 
# Install project dependencies
RUN npm install
 
# Copy the rest of the application code to the container
COPY . .
 
# Build the Angular application
RUN npm run build
 
RUN chown -R  1002080000:1002080000 /app  
 
#RUN chown -R  70c244735d39606a:70c244735d39606a /app  
# Expose the port the Angular app runs on
EXPOSE 4200
# Start the Angular app
CMD ["npm", "start"]
