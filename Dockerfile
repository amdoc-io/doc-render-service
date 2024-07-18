FROM node:20-alpine

RUN mkdir -p /root/app
WORKDIR /root/app
COPY ./package.json .
RUN npm install
COPY ./ .
EXPOSE 8080

CMD [ "npm", "run", "start" ]