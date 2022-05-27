# cc_projekt

# start web app

### 1. start backend
- change to backend folder
- npm install
- npm start
- open localhost:3000 in browser

**docker run -d --rm -p 3000:3000 --env NODE_ENV=development 'imageName'**

### 2. start prime-api
- change to prime-api folder
- npm install
- npm start
- __TEST API__ curl localhost:3001/prime/"insert number to"/"insert number from optional"

**docker run -d --rm -p 3001:3001 --env NODE_ENV=development 'imageName'**