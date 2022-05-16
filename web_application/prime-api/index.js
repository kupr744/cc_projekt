const express = require('express')
const app = express()
const path = require('path')

const port = 3001

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
  return {"result": result};
}

app.get('/prime/:to/:from?', (req, res) => {
  if(req.params.to === undefined && req.params.from === undefined) {
    res.status(400).send()
  } else if(req.params.from === undefined) {
    res.status(200).send(prime(1, req.params.to))
  } else {
    res.status(200).send(prime(req.params.from, req.params.to))
  }
})

app.listen(port, () => {
  console.log('Server listening on', port)
})
