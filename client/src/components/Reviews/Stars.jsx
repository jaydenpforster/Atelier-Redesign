import React from 'react';


let QuarterStars = (props) => {
  //need to send rating through props
  let ratingBefore = props.rating || 0;
  let rating = props.rating || 0;

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
      <h1>{ratingBefore}</h1>
      <div>
        {stars.map((item, i) => {
          return (
            <div className="single-star-container" key={i}>
              <div className="single-star-fill" style={{'width': `${parseInt(item*31)}px`}}>
                <img className="single-star-outline" src="star.png" alt="stars alt"></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuarterStars;