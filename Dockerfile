FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies including dev dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

RUN if [ ! -f .env.production ]; then cp env.example .env.production; fi

# Build the application
ENV NODE_ENV=production
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built application from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/.env.production ./.env.production
# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"] 