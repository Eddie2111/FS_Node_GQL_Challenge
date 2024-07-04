FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app


# Install dependencies (adjust based on your actual dependencies)
RUN npm install express apollo-server-express graphql cors prisma react react-dom

# Copy the client and server directories
COPY client/ ./client
COPY server/ ./server

# Expose the port where the server will listen
EXPOSE 4000
EXPOSE 3000
# Switch to a slim Node.js image for runtime
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the client and server directories
COPY --from=builder ./client ./
COPY --from=builder ./server ./


# Build the React app (adjust based on your build process)
RUN npm run build --prefix client  # Example build command

# Start the server using CMD
CMD [ "npm", "start" ]
CMD [ "npm", "start" ]




