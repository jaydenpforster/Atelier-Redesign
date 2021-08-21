import React from 'react'

const NewStyles = (props) => {

  let allStyles = [];
  let i = 0;
  for (let style in props.allStyles) {
    let product = props.allStyles[style]
    allStyles.push(
      <div
        className={props.allStyles[style].name}
        onClick={e => {

          props.setCurrentStyleInfo(product)
          props.setMainPhoto(product.photos[0].url)
          props.setThumbnails(product.photos)
          props.setAvailableSizes(product.skus)
          props.setChosenAmount('0')

          props.setChosenSize('-') // SelectNewSize
          props.setAvailableAmount('-')
          props.setChosenAmount('-')
          props.setSkuID(product)

          // Set Original Price and Sale Price here
          props.setOriginalPrice(product.original_price)
          if (product.sale_price === null) {
            props.setSalePrice('0')
          } else {
            props.setSalePrice(product.sale_price)
          }

        }}
        key={i}>
        <img
          className="StylePic"
          src={product.photos[0].thumbnail_url}
        >
        </img>
      </div>)
    i++;
  }

  // Calculate Price here!
  let price;
  if (props.sale_price === '0') {
    price = <div>Price: {props.original_price}</div>
  } else {
    price =
      <div>
        <div style={{'textDecoration': 'line-through'}}>{props.original_price}</div>
        <div style={{color: 'red'}}>Price: {props.sale_price}</div>
      </div>
  }

  return (
    <div
      onClick={e => {
        props.clickChosensSelectors()
      }}
    >
      <div className="OVStyles">{allStyles}</div>
      {price}
    </div>)
}

export default NewStyles