import React from 'react'

let NewButton = (props) => {
  if (props.availableAmount === '0') {
    return (
      <div></div>
    )
  }
  return (
    <button onClick={e => {
      e.preventDefault()

    }}>Add To Cart</button>
  )
}
export default NewButton
