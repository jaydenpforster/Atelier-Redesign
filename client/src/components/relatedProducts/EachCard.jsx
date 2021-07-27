import React from 'react';

const EachCard = (props) => {
  console.log(props.info.results[0].photos[0].thumbnail_url)
  return (
    <div className="eachCard">
      <img className="image" src={props.info.results[0].photos[0].thumbnail_url}></img>
      <div className="category">{props.info.category}</div>
      <div className="category">{props.info.description}</div>
      <div className="category">${props.info.defaultPrice}</div>
    </div>
  )
}

export default EachCard;