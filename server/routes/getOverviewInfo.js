/*eslint-env es6*/const axios = require('axios');
const config = require('../../config.js');

const getProduct = (productID) => {
  productID ? productID : '28212'

  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productID}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  })
    .then(data => {
      return data.data
    })
    .catch(err => {
      console.log('err', err)
    })

};
const getProductStyles = (productID) => {
  if (!productID) { productID = '28212' }

  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productID}/styles`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  })
    .then(data => {
      return data.data
    })
    .catch(err => {
      console.log('err', err)
    })

};

module.exports = {
  getProductStyles,
  getProduct,
}






