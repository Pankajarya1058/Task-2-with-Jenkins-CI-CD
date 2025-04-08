
# Stage-1 
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

# Running tests before build
RUN npm test

RUN npm run build

# Stage-2
FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

