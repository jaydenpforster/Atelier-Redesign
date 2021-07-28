const express = require('express');
const router = express();
const rev = require('./reviewsHelpers');


router.get('/reviews', (req, res) => {
  let productId = req.query.id;
  rev.getReviews(productId)
    .then((product) => {
      console.log('PROD: ', product)
      return rev.getProductRating(product.data.results);
    })
    .then((data) => {
      res.send({
        total: data.total,
        average: data.average});
    })
    .catch((err) => {
      console.log('Err: ', err);
    })
})


module.exports = router;