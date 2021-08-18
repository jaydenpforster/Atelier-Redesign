const axios = require('axios');
const config = require('../../config.js');

const getProductID = (productId) => {
  productId ? productId : productId = 28212;

  let proms = [];
  let users = [];

  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  })
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        let relatedIds = data.data[i];
        proms.push(
          axios({
            method: 'GET',
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${relatedIds}`,
            headers: {
              'User-Agent': 'request',
              'Authorization': config.TOKEN
            }
          })
            .then((relatedInfo) => {
              return users.push(relatedInfo.data);
            }))
      }
      return Promise.all(proms)
        .then(() => {
          return users;
        })
    })
    .catch((err) => {
      console.log('ERROR in relatedProductsHelper getProductID', err);
    })
};

const getProductStyles = (productId) => {
  productId ? productId : productId = 28212;

  let proms = [];
  let users = [];

  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productId}/related`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  })
    .then((data) => {
      for (let i = 0; i < data.data.length; i++) {
        let relatedIds = data.data[i];
        proms.push(
          axios({
            method: 'GET',
            url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${relatedIds}/styles`,
            headers: {
              'User-Agent': 'request',
              'Authorization': config.TOKEN
            }
          })
            .then((relatedInfo) => {
              return users.push(relatedInfo.data);
            }))
      }
      return Promise.all(proms)
        .then(() => {
          return users;
        })
    })
    .catch((err) => {
      console.log('ERROR in relatedProductsHelper getProductStyles', err);
    })
};

module.exports.getProductID = getProductID;
module.exports.getProductStyles = getProductStyles;