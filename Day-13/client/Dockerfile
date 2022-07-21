# Step 1
FROM node:alpine

# Step 2
WORKDIR /client

# Step 3
COPY package.json .

# Step 4
RUN npm install

# Step 5
COPY . .

# Step 6
CMD ["npm", "start"]