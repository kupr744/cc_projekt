const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json());
require('dotenv').config();

const port = process.env.NODE_ENV === 'development' ? 3000 : null;

if(process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.get('/', (req, res) => {
	res.status(200).sendFile(path.join(__dirname + '/index.html'))
})

app.get('/test', async (req, res) => {
  await axios('http://primeservice-clusterip-service/prime/10/1', 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        }
        })
        .then(data => res.status(200).send({"result": data.data.result, "host": process.env.HOSTNAME}))
        .catch(err => res.send(err))  
})

app.listen(port, () => {
  console.log("node_env:", process.env.NODE_ENV)
  console.log('Server listening on', port)
})

