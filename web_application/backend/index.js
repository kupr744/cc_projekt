const express = require('express')
const app = express()
const path = require('path')

const port = 3000

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname.split('backend')[0] + 'static/index.html'))
})

app.listen(port, () => {
  console.log('Server listening on', port)
})
