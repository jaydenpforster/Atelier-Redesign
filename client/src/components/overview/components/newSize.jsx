import React from 'react'
const NewSize = (props) => {

  let sizeOptions = []

  sizeOptions.push(
    <option
      key="100"
      value={'-'}
      required
    >Select Size</option>)

  let sizeI = 0
  for (let sku in props.availableSizes) {
    let size = props.availableSizes[sku].size
    let amount = props.availableSizes[sku].quantity
    let skuID = sku
    sizeOptions.push(
      <option
        value={`${size} ${amount} ${skuID}`}
        key={sizeI}
      >
        {size}
      </option>
    )
    sizeI++
  }
  // How to store

  let selectSizes =
    <select
      id="Select-Sizes"
      onChange={e => {
        props.setChosenSize(e.target.value.split(' ')[0])
        props.setAvailableAmount(e.target.value.split(' ')[1])
        props.setSkuID(e.target.value.split(' ')[2])
        props.setChosenAmount('-')
      }}
      value={props.chosenSize}
    >
      {sizeOptions}
    </select>
  return (
    <div>
      {selectSizes}
      <p>Size Chosen: {props.chosenSize}</p>
    </div>
  )
}

export default NewSize