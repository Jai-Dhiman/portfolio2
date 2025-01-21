# Stage 1: Build client
FROM oven/bun:1 as client-builder
WORKDIR /app/client
COPY client/package.json client/bun.lockb ./
RUN bun install
COPY client/ ./
RUN bun run build

# Stage 2: Build server
FROM oven/bun:1 as server-builder
WORKDIR /app/server
COPY server/package.json server/bun.lockb ./
RUN bun install
COPY server/ ./

# Stage 3: Production environment
FROM oven/bun:1-slim
WORKDIR /app

# Create directory structure
RUN mkdir -p client/dist server/src server/drizzle

# Copy built client files
COPY --from=client-builder /app/client/dist ./client/dist

# Copy server files and dependencies
COPY --from=server-builder /app/server/package.json ./server/
COPY --from=server-builder /app/server/node_modules ./server/node_modules
COPY --from=server-builder /app/server/src ./server/src
COPY --from=server-builder /app/server/drizzle ./server/drizzle

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Set working directory to where the server code is
WORKDIR /app

# Expose the port
EXPOSE 3000

# Start the server
CMD ["bun", "run", "./server/src/index.ts"]