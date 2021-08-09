import React from 'react';
import SingleTile from './SingleTile.jsx';

const ReviewTiles = (props) => {
  let allReviews = props.reviews;
  let reviews;

  if (allReviews.length > 0) {
    reviews = allReviews.map((review, index) => {
      <SingleTile key={`review=${index}`} review={review} />
    })
  } else {
    reviews = 'There are no reviews for this product.'
  }

  return (
    <div className='reviewTiles'>
      {reviews}
    </div>
  )
}

export default ReviewTiles;
