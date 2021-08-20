const express = require('express');
const router = express();
const rev = require('./reviewsHelpers');
const axios = require('axios');
const config = require('../../config.js');

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
      return rev.addReview(readyData)
    })
    .then((data) => {
      res.sendStatus(data)
    })
    .catch((err) => {
      console.log('ERROR in reviewRoutes /addReview', err)
    })
})

router.post('/interactions', (req, res) => {
  console.log('inside post')
  let interactionPromises = [];
  for (let i = 0; i < req.body.length; i++) {
    interactionPromises.push(
      axios({
        method: 'POST',
        url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
        data: req.body,
        headers: {
          'User-Agent': 'request',
          'Authorization': config.TOKEN
        }
      })
        .then((data) => {
          console.log('inner interactions data: ', data)
        })
    )
    return Promise.all(interactionPromises)
      .then((data) => {
        console.log()
      })
  }
});

module.exports = router;