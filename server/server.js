/*eslint-env es6*/
const express = require('express')
const app = express()
const port = 4000;
const path = require('path');
const bodyParser = require('body-parser');
const overview = require('./routes/overviewRoutes');
const ovRouteHelper = require('./routes/getOverviewInfo.js');
const relatedProducts = require('./routes/relatedProducts');
const relatedHelper = require('./routes/relatedProductsHelper.js');
const reviews = require('./routes/reviewsRoutes');
const reviewsHelper = require('./routes/reviewsHelpers.js');
const qna = require('./routes/qnaRoutes')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../client/dist')))

// app.use('/overview', overview);
app.use('/relatedProducts', relatedProducts);
// app.use('/reviews', reviews);
app.use('/qna', qna);

app.use('/overview', overview) //http://localhost:4000/overview/firstProduct


app.get('/getAllProductInfo', (req, res) => {
  console.log('@@hit getAllProductInfo', req.query.id)
  console.log('REQUEST', req)
  Promise.all([
    ovRouteHelper.getProduct(req.query.id),
    ovRouteHelper.getProductStyles(req.query.id),
    relatedHelper.getProductStyles(req.query.id),
    relatedHelper.getProductID(req.query.id),
    reviewsHelper.getReviews(req.query.id),
    reviewsHelper.getMetaData(req.query.id)
  ])
    .then(arrOfInfo => {
      res.status(200).send(arrOfInfo)
    })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

