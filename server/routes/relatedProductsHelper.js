const axios = require('axios');
const config = require('../config.js');

const getProductID = (productId) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`,
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN
      }
    })
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject('ERROR', err);
      });
  });
};

const getProductStyles = (productId) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/styles`,
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN
      }
    })
      .then((data) => {
        resolve(data.data);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

module.exports.getProductID = getProductID;
module.exports.getProductStyles = getProductStyles;