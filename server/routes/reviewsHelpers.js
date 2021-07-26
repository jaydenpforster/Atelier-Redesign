const axios = require('axios');
const config = require('../../config.js');

const getReviews = (productId) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}`,
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN
      }
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject('ERROR in getReviews: ', err);
      })
  });
}

const getProductRating = (resultsArr) => {
  return new Promise((resolve, reject) => {
    let sumRatings = 0;
    let howManyRatings = 0;
    for (let i = 0; i < resultsArr.length; i++) {
      let currentReview = resultsArr[i];
      sumRatings += currentReview.rating;
      howManyRatings++;
    }
    let averageRating = sumRatings / howManyRatings;

    averageRating = Number((averageRating).toFixed(1))
    resolve(averageRating);
  })
}

module.exports = {
  getReviews,
  getProductRating
}


