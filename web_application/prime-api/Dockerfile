FROM node:18-buster-slim

WORKDIR /app

COPY package.json /app

RUN npm install --production

COPY . /app

CMD ["node", "index.js"]