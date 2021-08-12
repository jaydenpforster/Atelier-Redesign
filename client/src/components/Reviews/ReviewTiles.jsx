import React from 'react';
import SingleTile from './SingleTile.jsx';

const ReviewTiles = (props) => {
  let allReviews = props.reviews;

  if (allReviews === undefined || allReviews.length === 0) {
    return (
      <div className='reviewTiles'>
        There are no reviews for this product.
      </div>
    )
  } else {
    const reviews = allReviews.map((rev, index) =>
      <SingleTile key={`review-${index}`} review={rev} renderStars={props.renderStars} />
    )

    return (
      <div className='reviewTiles'>
        {reviews}
      </div>
    )
  }
}

export default ReviewTiles;
