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
  let ratingPercentage = averageRating * 20;


  return (
    <div>
      <h1>{averageRating}</h1>
      <div className='starContainer'>
        <div className='starBox' style={{'width': `${ratingPercentage}%`}}>
          <div className='inlineStars'>
            <img className="starsLayout" src="star.png" alt="Star" />
            <img className="starsLayout" src="star.png" alt="Star" />
            <img className="starsLayout" src="star.png" alt="Star" />
            <img className="starsLayout" src="star.png" alt="Star" />
            <img className="starsLayout" src="star.png" alt="Star" />
          </div>
        </div>
      </div>
      <h4>{totalOfRatings} reviews</h4>
    </div>
  )
}

export default Stars