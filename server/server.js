const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client/dist')))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
