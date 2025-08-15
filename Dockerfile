# Use a multi-stage build to reduce final image size
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./
COPY server.ts ./

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the Vite client
# RUN npm run build

# Production stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files again for production dependencies
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy built files from builder stage
# COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./

# Copy any other necessary files (like tsconfig.json if needed)
COPY tsconfig.json ./

# Expose the port your server listens on (4000 from your workflow)
EXPOSE 4000

# Start the server
CMD ["npm", "start"]