const express = require('express')
const app = express()
const port = 4000
//const data = require('./data.json');
var bodyParser = require('body-parser');

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})