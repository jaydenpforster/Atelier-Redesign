const axios = require('axios');
const config = require('../../config.js');

const getHelpfulReviews = (productId) => {
  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}&count=1000&sort=helpful`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  })
    .then((data) => {
      return data.data.results;
    })
    .catch((err) => {
      console.error('ERROR in getHelpfulReviews: ', err);
    })
}

const getNewestReviews = (productId) => {
  return axios({
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews?product_id=${productId}&count=1000&sort=newest`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  })
    .then((data) => {
      return data.data.results;
    })
    .catch((err) => {
      console.error('ERROR in getNewestReviews: ', err);
    })
}

const filterMetaData = (metaData) => {
  console.log('meta: ', metaData)
  return new Promise((resolve, reject) => {
    let filtered = {};

    //format ratings
    let ratings = {};
    for (let rate in metaData.ratings) {
      ratings[rate] = Number(metaData.ratings[rate])
    }

    //calculate and format average rating
    let avgRating = {};
    let totalOfRatings = 0;
    let howManyRatings = 0;
    let averageRating;
    let ratingPercentage;
    for (let rating in ratings) {
      howManyRatings += ratings[rating];
      totalOfRatings += (rating * ratings[rating])
    }
    if (howManyRatings === 0) {
      averageRating = 0;
      ratingPercentage = 0;
    } else {
      averageRating = (totalOfRatings / howManyRatings);
      averageRating = Number((averageRating).toFixed(1));
      ratingPercentage = averageRating * 20;
    }
    avgRating['averageRating'] = averageRating;
    avgRating['ratingPercentage'] = ratingPercentage;

    //format recommended
    let recommended = {};
    for (let rec in metaData.recommended) {
      recommended[rec] = Number(metaData.recommended[rec]);
    }

    //format characteristics
    let characteristics = {}
    for (let key in metaData.characteristics) {
      let innerChar = {}
      innerChar['id'] = metaData.characteristics[key].id
      let value = Number(metaData.characteristics[key].value)
      let fixedValue = Number((value).toFixed(1))
      innerChar['value'] = fixedValue;
      characteristics[key] = innerChar;
    }

    filtered['ratings'] = ratings;
    filtered['recommended'] = recommended;
    filtered['characteristics'] = characteristics;
    filtered['avgRating'] = avgRating;

    resolve(filtered);
  });
}


const getMetaData = (productId) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${productId}`,
      headers: {
        'User-Agent': 'request',
        'Authorization': config.TOKEN
      }
    })
      .then((data) => {
        resolve(filterMetaData(data.data));
      })
      .catch((err) => {
        reject('ERROR in getCharacteristics: ', err);
      })
  });
}

const addHelpfulVote = (reviewId) => {
  return axios({
    method: 'PUT',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/${reviewId}/helpful`,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  })
    .then((data) => {
      return data.status
    })
    .catch((err) => {
      console.error('ERROR in addHelpfulVote: ', err);
    });
}



module.exports = {
  getHelpfulReviews,
  getNewestReviews,
  getMetaData,
  filterMetaData,
  addHelpfulVote
}


