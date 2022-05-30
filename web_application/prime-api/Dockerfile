FROM node:18-buster-slim

WORKDIR /usr/app

COPY ./ /usr/app
COPY ./package.json /usr/app

RUN npm install

CMD ["node", "index.js"]