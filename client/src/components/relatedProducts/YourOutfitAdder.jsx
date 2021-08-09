import React from 'react';
import EachOutfit from './EachOutfit.jsx';

class YourOutfitAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eachOutfit: []
    }
    this.click = this.click.bind(this);
  }



  click() {
    let eachOutfitcopy = this.state.eachOutfit.slice();
    let compareId = this.props.overViewStyles.product_id;

    if (eachOutfitcopy.length >= 1) {
      if (eachOutfitcopy.filter(i => i.id === compareId).length > 0) {
        return;
      }
      eachOutfitcopy.push({
        id: this.props.overViewStyles.product_id,
        results: this.props.overViewStyles.results,
        name: this.props.overViewProd.name,
        category: this.props.overViewProd.category,
        description: this.props.overViewProd.description,
        defaultPrice: this.props.overViewProd.default_price,
        features: this.props.overViewProd.features
      });
      this.setState({
        eachOutfit: eachOutfitcopy
      })
    }

    if (eachOutfitcopy.length < 1) {
      eachOutfitcopy.push({
        id: this.props.overViewStyles.product_id,
        results: this.props.overViewStyles.results,
        name: this.props.overViewProd.name,
        category: this.props.overViewProd.category,
        description: this.props.overViewProd.description,
        defaultPrice: this.props.overViewProd.default_price,
        features: this.props.overViewProd.features
      });
      this.setState({
        eachOutfit: eachOutfitcopy
      })
    }
  }

  render() {
    if (this.state.eachOutfit.length === 0) {
      return (
        <div>
          <div onClick={this.click} className="img">
            X
          </div>
          <div className="cardCategory">Category</div>
          <div className="expProductName">Expanded product name with extra text</div>
          <div className="cardPrice">$80.00</div>
          <div className="cardRating">*****</div>
        </div>
      )
    }
    return (
      <div className="yourOutfitCard">
        <div onClick={this.click} className="img">
          X
        </div>
        <div className="cardCategory">Category</div>
        <div className="expProductName">Expanded product name with extra text</div>
        <div className="cardPrice">$80.00</div>
        <div className="cardRating">*****</div>
        <div className="carousel-container">
          <div className="carousel-wrapper">
            <button className="left-arrow">
              &lt;
            </button>
            <div className="carousel-content-wrapper">

              <div className="carousel-content">
                {this.state.eachOutfit.map((each, index) =>
                  <EachOutfit
                    info={each}
                    prodId={this.state.info}
                    detailInfo={this.state.detailInfo}
                    overViewProd={this.state.overViewProd}
                    overViewStyles={this.state.overViewStyles}
                    renderStars={this.state.renderStars}
                    onClick={this.props.onClick}
                    key={index}
                  />)}
              </div>
              <button className="right-arrow">
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default YourOutfitAdder;