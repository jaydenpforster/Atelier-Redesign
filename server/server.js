const express = require('express')
// import express from 'express'

const app = express()
const port = 4000;
const path = require('path')
// import path from 'path'
const bodyParser = require('body-parser')
// import bodyParser from 'body-parser'
const overview = require('./routes/overviewRoutes')
// const relatedProducts = require('./routes/relatedProducts')
// import relatedProducts from './routes/relatedProducts'
// import oHelper from './routes/getOverviewInfo.js'

// const __dirname = path.resolve();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// console.log('__dirname', __dirname)
app.use(express.static(path.join(__dirname, '/../client/dist')))


app.use('/overview', overview) //http://localhost:4000/overview/firstProduct
// app.use('/relatedProducts', relatedProducts) //http://localhost:4000/relatedProducts/relatedProducts
// app.route('/overview', overview);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
  // console.log('route(r)', overview);
})




app.get('/', (req, res) => {
  console.log('path: /')
  res.send('some kind of string')
})
