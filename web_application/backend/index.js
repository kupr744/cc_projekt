const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
require('dotenv').config();

const port = process.env.NODE_ENV === 'development' ? 3000 : null;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/test', async (req, res) => {
  await axios('http://primeservice-clusterip-service/prime/10/1', 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
        })
        .then(data => res.send(data.data))
        .catch(err => res.send(err))  
})

app.listen(port, () => {
  console.log('Server listening on', port)
})

