/*eslint-env es6*/const axios = require('axios');
<<<<<<< HEAD

=======
>>>>>>> 562aa03fabeafa0a00b77ab9c1785804f1854035
const config = require('../../config.js');

const getProduct = (productID) => {
  if (!productID) { productID = 28212 }
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productID}`,
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN
      }
    })
      .then(data => {
        resolve(data.data)
      })
      .catch(err => {
        reject(err)
      })
  })
};
const getProductStyles = (productID) => {
  if (!productID) { productID = 28212 }
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${productID}/styles`,
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN
      }
    })
      .then(data => {
        resolve(data.data)
      })
      .catch(err => {
        reject(err)
      })
  })
};

module.exports = {
  getProductStyles,
  getProduct,
}






