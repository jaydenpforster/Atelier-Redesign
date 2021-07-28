const axios = require('axios');
const config = require('../../config.js');

const getProductID = (productId) => {

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
              // console.log('DATA===', relatedInfo.data)
              return users.push(relatedInfo.data);
              // console.log('HERE==', relatedInfo.data)
            }))
      }

      return Promise.all(proms)
        .then(() => {
          return users;
        })

    })
    .catch((err) => {
      console.log(err);
    })
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