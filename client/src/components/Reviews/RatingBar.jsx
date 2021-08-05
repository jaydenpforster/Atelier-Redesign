import React from 'react';

const RatingBar = (props) => {
  let barPercentage = (props.amount / props.total) * 100;
  return (
    <div className="ratingBar" style={{'width': `${barPercentage}%`}}></div>
  )
}

export default RatingBar;