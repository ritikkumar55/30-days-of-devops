# # Base Image
# FROM node:20-alpine3.18

# # Set the working direct
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package.json .
# COPY package-lock.json .

# # Install Dependencies
# RUN npm install

# #Copy the rest of the application code 
# COPY . .

# # Start the application
# CMD ["npm", "start"].

### Muti-Stage 

# ---------- Stage 1: Dependencies ----------
# FROM node:20-alpine3.18 AS deps

# WORKDIR /app

# COPY package.json package-lock.json ./
# RUN npm install --only=production


# # ---------- Stage 2: Runtime ----------
# FROM node:20-alpine3.18

# WORKDIR /app

# # Copy only required files from deps stage
# COPY --from=deps /app/node_modules ./node_modules
# COPY . .

# CMD ["npm", "start"]


### Distroless Image + Multi Stage 

# ---------- Stage 1: Build ----------
FROM node:20-alpine3.18 AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .


# ---------- Stage 2: Distroless Runtime ----------
FROM gcr.io/distroless/nodejs20

WORKDIR /app

# Copy app and dependencies from builder
COPY --from=builder /app .

# Start app (NO npm here)
CMD ["index.js"]
 