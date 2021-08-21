import React from 'react'

let NewAmount = (props) => {
  if (props.availableAmount === '-') {
    return (
      <div>
        <select><option>-</option></select>
        <p>Amount Chosen: {props.chosenAmount}</p>
      </div>
    )
  }
  if (props.availableAmount === '0') {
    return (<select><option>OUT OF STOCK</option></select>)
  }

  let amountArr = [];

  for (let i = 1; i <= Number(props.availableAmount); i++) { // i loop b/c I needed the index
    if (i === 16) { break }
    amountArr.push(
      <option
        value={i}
        key={i}
      >
        {i}
      </option>
    )
  }
  let selectAmount =
    <select
      onChange={e => {
        props.setChosenAmount(e.target.value)
      }}
    >
      {amountArr}
    </select>
  return (
    <div>
      <p>Please Select Size</p>
      {selectAmount}
      <p>Amount Chosen: {props.chosenAmount}</p>
    </div>
  )
}

export default NewAmount
