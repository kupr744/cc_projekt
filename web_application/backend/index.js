const express = require('express')
const app = express()
const path = require('path')

const port = 3000

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname.split('backend')[0] + 'static/index.html'))
})


//Sollte einen request senden an den Service der die Primzahlen berechnet 
app.get('/prime/:to/:from', async(req,res) => {
  if(req.params.to === undefined && req.params.from === undefined) {
    res.status(400).send("Syntax Error")
  } else if(req.params.from === undefined) {
    res.setHeader('Content-Type', 'application/json');
    var primes = prime(1, parseInt(req.params.to))
    res.status(200).send({"result": primes})

  } else {
    response = await fetch(`http://primeservice/prime/${req.params.to}/${req.params.from}`)
    const primes = await respose.json();

    return res.json({
      primes,
    });
  }
 

})

app.listen(port, () => {
  console.log('Server listening on', port)
})

