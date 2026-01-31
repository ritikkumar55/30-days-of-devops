# Base Image
FROM node:20-alpine3.18

# Set the working direct
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install Dependencies
RUN npm install

#Copy the rest of the application code 
COPY . .

# Start the application
CMD ["npm", "start"]