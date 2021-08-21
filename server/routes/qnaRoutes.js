const express = require('express');
const router = express();
const axios = require('axios');
// const config = require('../../config.js');

const wrap = fn => (...args) => fn(...args).catch(args[2]);

//get questions
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

//post question
router.post('/questions', wrap(async (req, res, next)=> {

  let question = {
    body: req.body.postBody,
    name: req.body.name,
    email: req.body.email,
    product_id: req.body.id
  }

  try {
    const response = await axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/', question,
      {headers: {Authorization: process.env.TOKEN}});
    res.sendStatus(201);
  } catch (error) {
    console.log('Error in post /questions: ', error);
    res.sendStatus(404);
  }
}));

//post answer
router.post('/answer', wrap(async (req, res, next)=> {

  let answer = {
    body: req.body.postBody,
    name: req.body.name,
    email: req.body.email,
    photos: req.body.photos
  }

  try {
    const response = await axios.post(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/:${req.body.id}/answers`, answer,
      {headers: {Authorization: process.env.TOKEN}});
    res.sendStatus(201);
  } catch (error) {
    console.log('Error in post /answer: ', error);
    res.sendStatus(404);
  }
}));

//mark question as helpful
router.put('/qHelpful', wrap(async (req, res, next)=> {

  console.log('This is to mark helpful id ', req.body.qId)

  try {
    const response = await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/${req.body.qId}/helpful`,
      {headers: {Authorization: process.env.TOKEN}});
    res.sendStatus(201);
  } catch (error) {
    console.log('Error in put helpful /qHelpful: ', error);

  }
}));

//mark question as reported
router.put('/qReport', wrap(async (req, res, next)=> {


  try {
    const response = await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/:${req.body.id}/report`,
      {headers: {Authorization: process.env.TOKEN}});
    res.sendStatus(201);
  } catch (error) {
    console.log('Error in put /qReport: ', error);
    res.sendStatus(404);
  }
}));

//mark answer as helpful
router.put('/aHelpful', wrap(async (req, res, next)=> {


  try {
    const response = await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/:${req.body.id}/helpful`,
      {headers: {Authorization: process.env.TOKEN}});
    res.sendStatus(201);
  } catch (error) {
    console.log('Error in answer helpful: ', error);
    res.sendStatus(404);
  }
}));

//mark answer as reported
router.put('/aReport', wrap(async (req, res, next)=> {


  try {
    const response = await axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/answers/:${req.body.id}/report`,
      {headers: {Authorization: process.env.TOKEN}});
    res.sendStatus(201);
  } catch (error) {
    console.log('Error in report answer: ', error);
    res.sendStatus(404);
  }
}));

module.exports = router;

