import React from 'react';
import axios from 'axios';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.getFirstProduct = this.getFirstProduct.bind(this)
  }
  getFirstProduct(newProduct) {
    if (!newProduct) { newProduct = 1; }
    axios.get('http://localhost:4000/overview/product')
      .then(productInfo => {
        console.log('info', productInfo)
      })
      .catch(err => console.error(err))
  }
  componentDidMount() {
    this.getFirstProduct()
  }

  render() {
    return (
      <div>
        <div>Overview Here!</div>
      </div>
    );
  }
}
export default Overview;