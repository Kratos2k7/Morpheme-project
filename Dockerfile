# Use an official Node.js runtime as a parent image
#FROM node:latest AS builder
FROM node:18.17.1 AS builder
ENV GENERATE_SOURCEMAP=false
# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
# RUN npm cache clean --force
RUN npm install npm@latest -g && npm install --legacy-peer-deps
RUN npm install -g vite
# Copy the remaining application files to the container
COPY . .

# Build the React app
RUN npm run build 
# Use an official nginx image as a parent image
FROM nginx:latest

# Copy the custom nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React app to the container
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
#CMD ["npm", "run", "dev"]

# Use an official nginx image as a parent image
#FROM nginx:latest

# Copy the custom nginx configuration file to the container
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React app to the container
#COPY --from=builder /app /usr/share/nginx/html

# Expose port 80 for the app to listen on
#EXPOSE 80

# Start nginx
#CMD ["nginx", "-g", "daemon off;"]
