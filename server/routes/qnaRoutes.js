const express = require('express');
const router = express();
const axios = require('axios');
// const config = require('/home/bofowzi/Documents/rpp29/fec/api/config.js');
const config = require('../../config.js');

router.get('/questions', (req, res) => {
  let id = Number(req.data.id);

  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${id}&page=1&count=100`, {
    headers: {
      Authorization: config.TOKEN
    }
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log('err', err);
    });

})

module.exports = router;