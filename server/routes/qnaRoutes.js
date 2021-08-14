const express = require('express');
const router = express();
const axios = require('axios');
const config = require('../../config.js');

router.get('/questions', (req, res) => {
  let id = Number(36300);

  //&page=1&count=100
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${id}`, {
    headers: {
      Authorization: config.TOKEN
    }
  })
    .then(response => {
      res.json(response.data);
      res.status(200)
    })
    .catch(err => {
      console.log('The error returned: ', err);
    });

})



module.exports = router;