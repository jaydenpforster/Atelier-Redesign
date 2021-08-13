import React from 'react';

const Stars = (props) => {
  let averageRating = props.averageRating.toFixed(1);
  return (
    <div>
      <div className="starsAverageRating">{averageRating}</div> <div className="starsAlignment">{props.renderStars()}</div>
    </div>
  )
}

export default Stars