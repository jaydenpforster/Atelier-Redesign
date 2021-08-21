import React from 'react';
import ProductCard from './ProductCard.jsx';
import YourOutfitAdder from './YourOutfitAdder.jsx';
import axios from 'axios';
import config from '../../../../config.js';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: '28212',
      // productInfo: [],
      // productDetailInfo: []s
    }
    this.clickRelatedProductTracker = this.clickRelatedProductTracker.bind(this);
    this.addYourOutfitTracker = this.addYourOutfitTracker.bind(this);
  }

  clickRelatedProductTracker() {
    let time = new Date()
    axios({
      method: 'POST',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
      headers: {
        'Authorization': config.TOKEN
      },
      data: {
        element: 'Each Related Card',
        widget: 'Related Products',
        time: time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + '-' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
      }
    })
  }

  addYourOutfitTracker() {
    console.log('Add Tracker')
    let time = new Date()
    axios({
      method: 'POST',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
      headers: {
        'Authorization': config.TOKEN
      },
      data: {
        element: 'Your Outfit Adder',
        widget: 'Related Products',
        time: time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + '-' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
      }
    })
  }



  render() {
    return (
      <div className="relatedProduct">
        <h2>Related Products</h2>
        <ProductCard
          info={this.props.info}
          detailInfo={this.props.detailInfo}
          overViewProd={this.props.overViewProd}
          overViewStyles={this.props.overViewStyles}
          starRating={this.props.starRating}
          renderStars={this.props.renderStars}
          relatedRatings={this.props.relatedRatings}
          show={4}
          onClick={this.props.onClick}
          tracker={this.clickRelatedProductTracker}
        />
        <h2>Your Outfit</h2>
        <YourOutfitAdder
          overViewProd={this.props.overViewProd}
          overViewStyles={this.props.overViewStyles}
          starRating={this.props.starRating}
          renderStars={this.props.renderStars}
          show={4}
        />

      </div>
    )
  }
}

export default RelatedProducts;