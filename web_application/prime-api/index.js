const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config();

const port = process.env.NODE_ENV === 'development' ? 3001 : null;

if(process.env.NODE_ENV === 'development') {
  app.use(cors());
}

app.get('/prime/:to/:from?', (req, res) => {
  if(req.params.to === undefined && req.params.from === undefined) {
    res.status(400).send("Syntax Error")
  } else if(req.params.from === undefined) {
    res.setHeader('Content-Type', 'application/json');
    var primes = func.prime(1, parseInt(req.params.to))
    res.status(200).send({"result": primes})
  } else {
    res.setHeader('Content-Type', 'application/json');
    var primes = func.prime(parseInt(req.params.from), parseInt(req.params.to))
    console.log(JSON.stringify({result: primes}))
    res.status(200).send({"result": primes})
  }
})

app.listen(port, () => {
  console.log('Server listening on', port)
})
