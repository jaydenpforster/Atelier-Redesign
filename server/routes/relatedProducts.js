const express = require('express');
const router = express();
const relatedProductsHelper = require('./relatedProductsHelper')


router.get('/relatedProducts', (req, res) => {
  console.log(req.query)
  let productId = req.query.id;
  relatedProductsHelper.getProductID(productId)
    .then((relatedProductIdList) => {
      res.status(200).send(relatedProductIdList);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/styles', (req, res) => {
  let productId = req.query.id;
  relatedProductsHelper.getProductStyles(productId)
    .then((productStyleInfo) => {
      res.status(200).send(productStyleInfo);
    })
    .catch((err) => {
      console.log(err);
    })
});

module.exports = router;