import React from 'react';
import ProductCard from './ProductCard.jsx';
import YourOutfitAdder from './YourOutfitAdder.jsx';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: '28212',
      // productInfo: [],
      // productDetailInfo: []s
    }
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