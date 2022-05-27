FROM node:18-buster-slim

WORKDIR /src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["node", "index.js"]