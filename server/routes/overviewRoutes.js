const express = require('express');
const router = express();

const getOverviewInfo = require('./getOverviewInfo');

router.get('/product', (req, res) => {
  let firstProductBaseInfo = getOverviewInfo.getProduct()
    .then(data => {
      return data
    })
    .catch(err => { console.error('ERROR in overview /product', err) })
  let firstProductStylesInfo = getOverviewInfo.getProductStyles()
    .then(styles => {
      return styles
    })
  Promise.all([firstProductBaseInfo, firstProductStylesInfo])
    .then(allInfo => {
      res.send(allInfo)
    })
})




module.exports = router