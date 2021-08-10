import React from 'react';

const SingleTile = (props) => {
  let review = props.review;
  let renderStars = props.renderStars

  console.log('Star rating: ', review.rating)
  console.log('Date of Review: ', review.date)
  console.log('Review Summary: ', review.summary)
  console.log('Review Body: ', review.body)
  console.log('Images: ', review.images)
  console.log('Recommend: ', review.recommend)
  console.log('Reviewer Name: ', review.recommend)
  console.log('Response: ', review.response)
  console.log('Rating Helpfulness: ', review.helpfulness)

  return (
    <div className="singleTile">
      {renderStars(review.rating)}
    </div>
  )
}

export default SingleTile;



// Star Rating: {props.renderStars()}<br></br>
// Date of Review: {review.date}<br></br>
// Review Summary: {review.summary}<br></br>
// Review Body: {review.body}<br></br>
// Images: <br></br>
// Recommend: {review.recommend}<br></br>
// Reviewer Name: {review.reviewer_name}<br></br>
// Response: {review.response}<br></br>
// Rating Helpfulness: {review.helpfulness}