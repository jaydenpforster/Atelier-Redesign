import React from 'react';
// import ReactDOM from 'react-dom';
import $ from 'jquery';
import ProductCard from './ProductCard.jsx';
import YourOutfit from './YourOutfit.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '28212',
      productInfo: [],
      productDetailInfo: []
    }
  }

  //props will be the Product ID coming from Overview

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:4000/relatedProducts/relatedProducts',
      type: 'GET',
      data: {id: this.state.productId},
      success: (data) => {
        // console.log('Success', data);
        this.setState({
          productInfo: data
        })
      },
      error: (data) => {
        console.log('Error', data);
      }
    });

    $.ajax({
      url: 'http://localhost:4000/relatedProducts/styles',
      type: 'GET',
      data: {id: this.state.productId},
      success: (data) => {
        // console.log('SECOND DATA', data);
        this.setState({
          productDetailInfo: data
        })
      },
      error: (data) => {
        console.log('SECOND ERROR', data);
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Related Products</h2>
        <ProductCard info={this.state.productInfo} detailInfo={this.state.productDetailInfo}/>
        <h2 className="yourOutfitTitle">Your Outfit</h2>
        <YourOutfit />
      </div>
    )
  }
}

export default Main;