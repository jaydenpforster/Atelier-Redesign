import React from 'react';

const Stars = (props) => {
  return (
    <div>
      <div className="starsAverageRating">{props.averageRating}</div> <div className="starsAlignment">{props.renderStars()}</div>
    </div>
  )
}

export default Stars