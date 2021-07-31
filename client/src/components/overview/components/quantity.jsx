/*eslint-env es6*/
import React from 'react'

class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      features: '',
    };
  }
  renderQuantity() {
    let amount = this.props.quantity;
    // console.log('Quantity', amount)
    let arr = [];
    let i = 0;
    for (let sku in amount) {
      arr.push(amount[sku])
    }
    arr.map(item => {
      i++;
      return (<option key={i}>{item.quantity}</option>)
    })
  }

  render() {
    this.renderQuantity()
    return (
      <div>
        <div>Quantity here!</div>
        <select>
          <option>none</option>
          <option>Meow</option>
          <option>Woof</option>
        </select>
      </div>
    )
  }
}
export default Quantity