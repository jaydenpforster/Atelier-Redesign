import React from 'react';
import EachCard from './EachCard.jsx';

const ProductCard = (props) => {

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
        defaultPrice: props.info[i].default_price
      })
    }
  }

  return (
    <div className="productCard">
      {relevantProps.map((each, index) =>
        <EachCard info={each} key={index} />)}
    </div>
  )
}

export default ProductCard;