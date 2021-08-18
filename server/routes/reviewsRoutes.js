const express = require('express');
const router = express();
const rev = require('./reviewsHelpers');

router.put('/helpful', (req, res) => {
  let reviewId = req.body.revId;
  rev.addHelpfulVote(reviewId)
    .then((data) => {
      res.sendStatus(data)
    })
    .catch((err) => {
      console.log('ERROR in reviewRoutes /helpful', err)
    })
});

router.post('/addReview', (req, res) => {
  console.log('ONE')
  rev.formatPostData(req.body)
    .then((readyData) => {
      console.log('THREE')
      return rev.addReview(readyData)
    })
    .then((data) => {
      console.log('SIX: ', data)
      res.sendStatus(data)
    })
    .catch((err) => {
      console.log('ERROR in reviewRoutes /addReview', err)
    })
})

module.exports = router;