import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ProductCard from './ProductCard.jsx';
import YourOutfit from './YourOutfit.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '28212',

    }
  }

  //props will be the Product ID coming from Overview

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:4000/relatedProducts/relatedProducts',
      type: 'GET',
      data: {id: this.state.productId},
      success: (data) => {
        console.log('Success', data);
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
        console.log('SECOND DATA', data);
      },
      error: (data) => {
        console.log('SECOND ERROR', data);
      }
    });
  };

  render() {
    return(
      <div>
        <h2>Related Products</h2>
        <ProductCard />
        <h2 className="yourOutfitTitle">Your Outfit</h2>
        <YourOutfit />
      </div>
    )
  }
}

export default Main;