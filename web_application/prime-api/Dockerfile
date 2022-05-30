FROM node:18-buster-slim

WORKDIR /usr/app

COPY ./package*.json ./usr/app

RUN npm install

COPY ./ ./usr/app

CMD ["node", "index.js"]