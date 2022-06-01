const express = require('express')
const app = express()
const path = require('path')

require('dotenv').config();

const port = process.env.NODE_ENV === 'development' ? 3000 : null;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(port, () => {
  console.log('Server listening on', port)
})

