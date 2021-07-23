import React from 'react';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placehoder: []
    }
  }

  render() {
    return (
      <div className="productCard">

        <div className="img">
          <img className="cardImg" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>
        </div>
        <div className="cardCategory">Category</div>
        <div className="expProductName">Expanded product name with extra text</div>
        <div className="cardPrice">$80.00</div>
        <div className="cardRating">*****</div>
      </div>
    )
  }
}

export default ProductCard;