import React from 'react';

const EachOutfit = (props) => {

  return(
    <div className="eachOutfit">

      <img onClick={props.click} src={props.info.results[0].photos[0].thumbnail_url}></img>
      <img className="cardStar" src="star.png" alt="stars alt"></img>
      <div className="category">{props.info.category}</div>
      <div className="name">{props.info.name}</div>
      <div className="description">{props.info.description}</div>
      <div className="defaultPrice">${props.info.defaultPrice}</div>
      {/* <div>{props.renderStars()}</div> */}
    </div>
  )

}

export default EachOutfit