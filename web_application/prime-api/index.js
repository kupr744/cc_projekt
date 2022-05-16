const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const port = 3001

app.use(cors())

function prime(from = 1, to) {
  var prime = true;
  var result = [];

  if(from === 0) from++;

  for (let i = from; i <= to; i++) {
    prime = true;
    for (let j = 2; j < i; j++) {
      if(i % j === 0) {
        prime = false;
        break;
      }
    }

    if(prime) {
      result.push(i);
    }
  }
  return result;
}

app.get('/prime/:to/:from?', (req, res) => {
  if(req.params.to === undefined && req.params.from === undefined) {
    res.status(400).send("Syntax Error")
  } else if(req.params.from === undefined) {
    res.setHeader('Content-Type', 'application/json');
    var primes = prime(1, parseInt(req.params.to))
    res.status(200).send({"result": primes})
  } else {
    res.setHeader('Content-Type', 'application/json');
    var primes = prime(parseInt(req.params.from), parseInt(req.params.to))
    console.log(JSON.stringify({result: primes}))
    res.status(200).send({"result": primes})
  }
})

app.listen(port, () => {
  console.log('Server listening on', port)
})
