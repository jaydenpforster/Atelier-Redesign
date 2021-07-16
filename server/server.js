const express = require('express')
const app = express()
const port = 3000
const path = require('path')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




