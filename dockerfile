# Use an official Node.js 14 runtime as the base image
FROM node:16.15.0-alpine as build
 
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
 
FROM nginx:1.17

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /code

COPY --from=build /app/dist .

EXPOSE 4200:4200
CMD ["nginx", "-g", "daemon off;"]