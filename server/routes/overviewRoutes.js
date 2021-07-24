const express = require('express');
const router = express();
// const axios = require('axios');
const getOverviewInfo = require('./getOverviewInfo');

router.get('/product', (req, res) => {
  console.log('first Product!')
  let firstProductBaseInfo = getOverviewInfo.getProduct()
    .then(data => {
      // console.log('file Routes: firstProduct Log', data)
      // res.send(data)
      return data
    })
    .catch(err => { console.error(err) })
  let firstProductStylesInfo = getOverviewInfo.getProductStyles()
    .then(styles => {
      return styles
    })
  Promise.all([firstProductBaseInfo, firstProductStylesInfo])
    .then(allInfo => {
      console.log('allInfo', allInfo)
      res.send(allInfo)
    })
})




module.exports = router