# syntax=docker/dockerfile:1
FROM node:12-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080
CMD [ "node", "dist/index.js" ]