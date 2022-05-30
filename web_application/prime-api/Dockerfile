FROM node:18-buster-slim

<<<<<<< Updated upstream
WORKDIR /src/app

COPY ["package.json", "package-lock.json", "./"]
=======
COPY ./ ./
>>>>>>> Stashed changes

RUN npm install

COPY . .

CMD ["node", "index.js"]