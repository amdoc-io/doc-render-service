FROM node:20-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json package.json

COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]