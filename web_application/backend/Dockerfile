FROM node:18-buster-slim

RUN cd .. 

WORKDIR /src/app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["node","index.js"]