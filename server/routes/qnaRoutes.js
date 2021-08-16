const express = require('express');
const router = express();
const axios = require('axios');
const config = require('../../config.js');

const wrap = fn => (...args) => fn(...args).catch(args[2]);

router.get('/questions', wrap(async (req, res, next) => {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${req.body.id}`,
      {headers: {Authorization: process.env.TOKEN}});

    res.status(200).send(response.data);
  } catch (error) {
    console.log('Error in get /questions: ', error);
    res.sendStatus(404);
  }
}));

router.post('/questions', wrap(async (req, res, next)=> {
  try {
    const response = await axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${req.body.id}`,
      {headers: {Authorization: process.env.TOKEN}});
    res.sendStatus(201);
  } catch (error) {
    console.log('Error in post /questions: ', error);
    res.sendStatus(404);
  }
}));

module.exports = router;

