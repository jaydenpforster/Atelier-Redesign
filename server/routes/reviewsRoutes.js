const express = require('express');
const router = express();
const rev = require('./reviewsHelpers');


router.get('/ratings', (req, res) => {
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

router.get('/reviews', (req, res) => {
  //use rev.getReviews(productId)
    //then use rev.getRecPercentage
      //then send reviews and percentage here
})


module.exports = router;