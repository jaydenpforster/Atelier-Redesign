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
  rev.formatPostData(req.body)
    .then((readyData) => {
      rev.addReview(readyData)
    })
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      console.log('ERROR in reviewRoutes /addReview', err)
    })
})

module.exports = router;