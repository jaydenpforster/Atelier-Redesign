const axios = require('axios');
const config = require('../../config.js');

// eslint-disable-next-line func-style

module.exports.getQuestions = async function (id) {
  try {
    const response = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions?product_id=${id}`, {
      headers: {
        Authorization: config.TOKEN
      }
    })

    return response.data;

  } catch (error) {
    console.log('Error in Ansyc Await: ', error);
  }
};