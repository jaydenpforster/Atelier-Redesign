import React from 'react';
import ProductCard from './ProductCard.jsx';
import YourOutfitAdder from './YourOutfitAdder.jsx';

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
        <h2>Your Outfit</h2>
        <YourOutfitAdder
          overViewProd={this.props.overViewProd}
          overViewStyles={this.props.overViewStyles}
        />

      </div>
    )
  }
}

export default RelatedProducts;