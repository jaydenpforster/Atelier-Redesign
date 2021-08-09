import React from 'react';
import SingleTile from './SingleTile.jsx';

const ReviewTiles = (props) => {
  //map to SingleTile
  return (
    <div className='reviewTiles'>
      {/* <SingleTile renderStars={props.renderStars} /> */}
      {/* map as review */}
    </div>
  )
}

export default ReviewTiles;


//star rating
//date of review "Month DD, YYYY"
//review summary
//review body
  //images
//recommend
//reviewer name
//response to review
//rating helpfulness