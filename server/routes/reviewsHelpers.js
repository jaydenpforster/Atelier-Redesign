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
      console.error('ERROR in getHelpfulReviews: ', err)
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
      console.error('ERROR in getNewestReviews: ', err)
    })
}

const filterMetaData = (metaData) => {
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
    filtered['id'] = metaData.product_id;

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
        reject('ERROR in getCharacteristics: ', err)
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
      console.error('ERROR in addHelpfulVote: ', err)
    });
}

const formatPostData = (postData) => {
  // console.log('TWO')
  return new Promise ((resolve, reject) => {
    let formattedPostData = {};

    formattedPostData['product_id'] = Number(postData.product_id);
    formattedPostData['rating'] = Number(postData.rating);
    formattedPostData['summary'] = postData.summary;
    formattedPostData['body'] = postData.body;

    let rec;
    if (postData['recommend'] === 'true') {
      rec = true;
    } else if (postData['recommend'] === 'false') {
      rec = false;
    }

    formattedPostData['recommend'] = rec;
    formattedPostData['name'] = postData.name;
    formattedPostData['email'] = postData.email;

    let formattedChars = {};
    let postChars = postData.characteristics;

    for (key in postChars) {
      if (postChars[key].id !== '0') {
        formattedChars[postChars[key].id] = Number(postChars[key].rating)
      }
    }

    formattedPostData['characteristics'] = formattedChars;
    resolve(formattedPostData);
  });
}

const addReview = (reviewData) => {
  // console.log('FOUR');
  return axios({
    method: 'POST',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews',
    data: reviewData,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  })
    .then((data) => {
      // console.log('FIVE, :', data.status)
      return data.status
    })
    .catch((err) => {
      console.error('ERROR in addReview: ', err)
    });
}


module.exports = {
  getHelpfulReviews,
  getNewestReviews,
  getMetaData,
  filterMetaData,
  addHelpfulVote,
  formatPostData,
  addReview
}





