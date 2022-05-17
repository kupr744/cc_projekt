FROM node:latest

RUN cd .. 

WORKDIR /src/api

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . .

CMD ["node","index.js"]