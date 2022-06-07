const express = require('express')
const app = express()
const cors = require('cors')
const func = require('./function')

require('dotenv').config();

const port = 3001;

if(process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.get('/prime/:to/:from?', (req, res) => {
  if(req.params.to === undefined && req.params.from === undefined) {
    res.status(400).send("Bad Request")
  } else if(req.params.from === undefined) {
    res.setHeader('Content-Type', 'application/json');
    var primes = func.prime(1, parseInt(req.params.to))
    res.status(200).send({"host": process.env.HOSTNAME, "result": primes})
  } else {
    res.setHeader('Content-Type', 'application/json');
    var primes = func.prime(parseInt(req.params.from), parseInt(req.params.to))
    console.log(JSON.stringify({result: primes}))
    res.status(200).send({"host": process.env.HOSTNAME, "result": primes})
  }
})

app.listen(port, () => {
  console.log("node_env:", process.env.NODE_ENV)
  console.log('Server listening on', port)
})
