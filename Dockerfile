FROM node:20-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY src/package.json src/package-lock.json .
RUN npm install
COPY src/ .
EXPOSE 8080

CMD [ "node", "app.js" ]