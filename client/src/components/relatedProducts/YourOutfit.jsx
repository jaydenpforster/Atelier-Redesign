import React from 'react';

class YourOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: []
    }
  }

  render() {
    return(
      <div className="yourOutfitCard">
      <div className="img">
        X
      </div>
      <div className="cardCategory">Category</div>
      <div className="expProductName">Expanded product name with extra text</div>
      <div className="cardPrice">$80.00</div>
      <div className="cardRating">*****</div>
    </div>
    )
  }

}

export default YourOutfit;