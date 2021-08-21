import React from 'react'
import axios from 'axios'
import config from '../../../../../config.js'
  // rename AddToCart
let NewButton = (props) => {
  if (props.availableAmount === '0') {
    return (
      <div></div>
    )
  }
  return (
    <button onClick={e => {

      // If state is 'select size'
      if (props.chosenSize === '-') {
        // open select tag
        // console.log('addToCart chosensize')
      }

      // send req based on state
      for (let i = 0; i < Number(props.chosenAmount); i++) {
        axios({
          method: 'POST',
          url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/cart',
          headers: {
            'User-Agent': 'request',
            'Authorization': config.TOKEN
          },
          data: {
            sku_id: Number(props.skuID)
          }
        })
      }
      if (props.chosenSize !== '-') {
        alert('Added to Cart!')
      }
    }}>Add To Cart</button>
  )
}
export default NewButton
/*
              chosenSize={this.state.chosenSize}
              chosenAmount={this.state.chosenAmount}
              skuID={this.state.skuID}
              showWarning={this.state.showWarning}
              availableAmount={this.state.availableAmount}
*/