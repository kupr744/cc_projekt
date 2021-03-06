const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());
require('dotenv').config();

const port = 3000;

if(process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => {
  console.log("node_env:", process.env.NODE_ENV)
  console.log('Server listening on', port)
})

