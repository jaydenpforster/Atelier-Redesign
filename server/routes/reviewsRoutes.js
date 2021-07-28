const express = require('express');
const router = express();
const rev = require('./reviewsHelpers');


router.get('/reviews', (req, res) => {
  let productId = req.query.id;
  rev.getReviews(productId)
    .then((product) => {
      res.send(product.results);
    })
    .catch((err) => {
      console.log('Err: ', err);
    });
});

router.get('/meta', (req, res) => {
  let productId = req.query.id;
  let sortOption = req.query.sort;
  rev.getMetaData(productId, sortOption)
    .then((data) => {
      return rev.filterMetaData(data)
    })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR in /meta router: ', err)
    });
});


module.exports = router;