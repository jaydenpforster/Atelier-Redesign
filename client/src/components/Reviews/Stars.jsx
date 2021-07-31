import React from 'react';

let Stars = (props) => {
  //getting and calculating the average rating
  let ratingsObject = props.ratings;
  let totalOfRatings = 0;
  let howManyRatings = 0;
  let averageRating;

  for (let rating in ratingsObject) {
    howManyRatings++;
    totalOfRatings += (rating * ratingsObject[rating])
  }
  if (howManyRatings === 0) {
    averageRating = 0;
  } else {
    averageRating = (totalOfRatings / howManyRatings);
    averageRating = Number((averageRating).toFixed(1));
  }

  //applying average rating to stars
  let ratingBefore = averageRating;
  let rating = averageRating;

  let stars = [];
  while (stars.length < 5) {
    if (rating > 1) {
      stars.push(1);
    } else if (rating > 0) {
      if (rating >= 0.13 && rating <= 0.37) {
        stars.push(0.37);
      } else if (rating >= 0.38 && rating <= 0.62) {
        stars.push(0.52);
      } else if (rating >= 0.63 && rating <= 0.87) {
        stars.push(0.7);
      } else if (rating >= 0.88) {
        stars.push(1)
      } else {
        stars.push(0);
      }
    } else {
      stars.push(0);
    }
    rating = rating - 1;
  }

  return (
    <div>
      <strong>!!!Average Rating and Stars Here!!!</strong>
      <h1>{ratingBefore}</h1>
      <div>
        {stars.map((item, i) => {
          return (
            <div className="star-box" key={i}>
              <div className="star-filled-in" style={{'width': `${parseInt(item * 31)}px`}}>
                <img className="star-outline" src="star.png" alt="stars alt"></img>
              </div>
            </div>
          );
        })}
      </div>
      <h4>{totalOfRatings} reviews</h4>
    </div>
  );
};

export default Stars;