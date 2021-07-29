import React from 'react';

const EachCard = (props) => {

  return (
    <div className="eachCard">
      <img src={props.info.results[0].photos[0].thumbnail_url}></img>
      <img className="cardStar" src="star.png" alt="stars alt"></img>
      <div className="category">{props.info.category}</div>
      <div className="category">{props.info.name}</div>
      <div className="category">{props.info.description}</div>
      <div className="category">${props.info.defaultPrice}</div>
    </div>
  )
}

export default EachCard;