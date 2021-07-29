/*eslint-env es6*/
import React from 'react'
import axios from 'axios'
import Features from './components/features.jsx'
import Styles from './components/styles.jsx'
import Size from './components/size.jsx'
import Quantity from './components/quantity.jsx'

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      info: '',
      styles: '',
    };
    this.getFirstProduct = this.getFirstProduct.bind(this)
  }
  getFirstProduct(newProduct) {
    if (!newProduct) { newProduct = 1; }
    axios.get('http://localhost:4000/overview/product')
      .then(productInfo => {
        console.log('info', productInfo)
        this.setState({
          info: productInfo.data[0],
          styles: productInfo.data[1]
        })
        console.log('state', this.state.styles)
      })
      .catch(err => console.error(err))
  }
  componentDidMount() {
    this.getFirstProduct()
  }

  render() {
    let renderFeatures;
    let renderStyles;
    if (this.state.info !== '') {
      renderFeatures = <Features features={this.state.info.features} />
      renderStyles = <Styles styles={this.state.styles.results} />
    } else {
      renderFeatures = <div></div>
      renderStyles = <div></div>
    }
    return (
      <div>
        <div>Overview Here!</div>
        <div>{this.state.info.name}</div>
        <div>{this.state.info.category}</div>
        <div>OV Price: {this.state.info.default_price}</div>
        <div>{this.state.info.slogan}</div>
        <div>{this.state.info.description}</div>
        <br></br><br></br><br></br>
        {renderFeatures}
        <br></br><br></br><br></br>
        {renderStyles}
        <br></br><br></br><br></br>

      </div>
    );
  }
}
export default Overview;

