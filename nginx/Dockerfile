# Stage 1: Build React application
FROM node:18-alpine AS build-stage

WORKDIR /app

# Copy package.json and package-lock.json
COPY ../frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend source files
COPY ../frontend/ ./

# Build React app
RUN npm run build

# Stage 2: Serve React app with Nginx
FROM nginx:latest

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built React static files from build-stage
COPY --from=build-stage /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
