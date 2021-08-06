import React, {useState, useEffect} from 'react';
import EachCard from './EachCard.jsx';

const ProductCard = (props) => {
  if (!props.detailInfo) {
    return null;
  }


  let combine = props.detailInfo.reduce((map, value) => {
    map[value.product_id] = value;
    return map;
  }, {});
  let relevantProps = [];
  for (let i = 0; i < props.info.length; i++) {
    let items = combine[props.info[i].id]
    if (items) {
      relevantProps.push({
        id: items.product_id,
        results: items.results,
        name: props.info[i].name,
        category: props.info[i].category,
        description: props.info[i].description,
        defaultPrice: props.info[i].default_price,
        features: props.info[i].features
      })
    }
  }

  return (
    <div className="productCard">
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <button className="left-arrow">
            &lt;
          </button>
          <div className="carousel-content-wrapper">
            <div className="carousel-content">
              {relevantProps.map((each, index) =>
                <EachCard
                  info={each}
                  prodId={props.info}
                  detailInfo={props.detailInfo}
                  overViewProd={props.overViewProd}
                  overViewStyles={props.overViewStyles}
                  renderStars={props.renderStars}
                  onClick={props.onClick}
                  key={index}
                />)}
            </div>
            <button className="right-arrow">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;