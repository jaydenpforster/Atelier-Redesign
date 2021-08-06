import React from 'react';
import $ from 'jquery';
import ProductCard from './ProductCard.jsx';
import YourOutfit from './YourOutfit.jsx';
import Modal from './Modal.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: '28212',
      // productInfo: [],
      // productDetailInfo: []
    }
  }



  render() {
    return (
      <div>
        <h2>Related Products</h2>
        <ProductCard
          info={this.props.info}
          detailInfo={this.props.detailInfo}
          overViewProd={this.props.overViewProd}
          overViewStyles={this.props.overViewStyles}
          renderStars={this.props.renderStars}
          onClick={this.props.onClick}
        />
        <h2 className="yourOutfitTitle">Your Outfit</h2>
        <YourOutfit />
      </div>
    )
  }
}

export default RelatedProducts;