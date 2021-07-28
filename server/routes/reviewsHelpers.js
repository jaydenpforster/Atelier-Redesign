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
        // console.log('I AM REVIEWS obj: ', data.data.results)
        resolve(data);
      })
      .catch((err) => {
        reject('ERROR in getReviews: ', err);
      })
  });
}

const getProductRating = (resultsArr) => {
  return new Promise((resolve, reject) => {
    let howManyAndAverage = {};
    let sumRatings = 0;
    let howManyRatings = 0;
    for (let i = 0; i < resultsArr.length; i++) {
      let currentReview = resultsArr[i];
      sumRatings += currentReview.rating;
      howManyRatings++;
    }
    let averageRating = sumRatings / howManyRatings;

    averageRating = Number((averageRating).toFixed(1))

    howManyAndAverage['total'] = howManyRatings;
    howManyAndAverage['average'] = averageRating;
    resolve(howManyAndAverage);
  })
}

const getRecPercentage = (resultsArr) => {
  //data.data.results is an array of objects
    //then check recommend
}


//going to need to use promise.all



module.exports = {
  getReviews,
  getProductRating,
  getRecPercentage
}


