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
    //either send reviews back here or incorporate them into above
})


module.exports = router;