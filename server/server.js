const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const bodyParser = require('body-parser');
const relatedProductsHelper = require('./relatedProductsHelper.js');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/relatedProducts', (req, res) => {
  console.log('REQUEST=', req.query.id)
  let productId = req.query.id;
  relatedProductsHelper.getProductID(productId)
  .then((relatedProductIdList) => {
    console.log('FIRST DATA=', relatedProductIdList);
    res.status(200).send(relatedProductIdList);
  })
  .catch((err) => {
    console.log(err);
  });
});

app.get('/styles', (req, res) => {
  let productId = req.query.id;
  relatedProductsHelper.getProductStyles(productId)
  .then((productStyleInfo) => {
    console.log('productStyleInfo',productStyleInfo);
    res.status(200).send(productStyleInfo);
  })
  .catch((err) => {
    console.log(err);
  })
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
