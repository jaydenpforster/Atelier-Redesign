import React from 'react';
import EachOutfit from './EachOutfit.jsx';

class YourOutfitAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eachOutfit: [],
      currentIndex: 0,
      length: 0
    }
    this.click = this.click.bind(this);
    this.delete = this.delete.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  click() {
    let eachOutfitcopy = this.state.eachOutfit.slice();
    let compareId = this.props.overViewStyles.product_id;

    if (eachOutfitcopy.length >= 1) {
      if (eachOutfitcopy.filter(eachOutfit => eachOutfit.id === compareId).length > 0) {
        return;
      }
      eachOutfitcopy.push({
        id: this.props.overViewStyles.product_id,
        results: this.props.overViewStyles.results,
        name: this.props.overViewProd.name,
        category: this.props.overViewProd.category,
        description: this.props.overViewProd.description,
        defaultPrice: this.props.overViewProd.default_price,
        features: this.props.overViewProd.features,
        averageRating: this.props.starRating
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
        features: this.props.overViewProd.features,
        averageRating: this.props.starRating
      });
      let tester = eachOutfitcopy;
      localStorage.setItem('value', tester);
      localStorage.getItem('value')
      this.setState({
        eachOutfit: eachOutfitcopy
      })
    }
  }

  delete(idNum) {
    let eachOutfitcopy = this.state.eachOutfit.slice();
    let indexToDelete = eachOutfitcopy.map((item) => { return item.id; }).indexOf(idNum);
    eachOutfitcopy.splice(indexToDelete, 1);
    this.setState({
      eachOutfit: eachOutfitcopy
    })
  }

  next() {
    if (this.state.currentIndex < (this.state.eachOutfit.length - this.props.show)) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      })
    }
  }

  prev() {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }

  render() {
    if (this.state.eachOutfit.eachOutfit === 0) {
      return (
        <div className="carousel-container">
          <div onClick={this.click} className="img">
            CLICK TO ADD TO YOUR OUTFIT
          </div>
          <div className="cardRating">*****</div>
        </div>
      )
    }
    return (
      <div className="carousel-container">
        <div onClick={this.click} className="img">
          CLICK TO ADD TO YOUR OUTFIT
        </div>
        <div className="cardRating">*****</div>

        <div className="carousel-wrapper">
          {this.state.currentIndex > 0 &&
            <button
              className="left-arrow"
              onClick={this.prev}
            >
            &lt;
            </button>
          }
          <div className="carousel-content-wrapper">
            <div
              className={`carousel-content show-${this.props.show}`}
              style={{ transform: `translateX(-${this.state.currentIndex * (100 / this.props.show)}%)` }}
            >
              {this.state.eachOutfit.map((each, index) =>
                <EachOutfit
                  info={each}
                  prodId={this.state.info}
                  detailInfo={this.state.detailInfo}
                  overViewProd={this.state.overViewProd}
                  overViewStyles={this.state.overViewStyles}
                  renderStars={this.state.renderStars}
                  onClick={this.props.onClick}
                  delete={this.delete}
                  renderStars={this.props.renderStars}
                  key={index}
                />)}
            </div>
            {this.state.currentIndex < (this.state.eachOutfit.length - this.props.show) &&
              <button
                className="right-arrow"
                onClick={this.next}
              >
              &gt;
              </button>}
          </div>
        </div>
      </div>
    )
  }
}

export default YourOutfitAdder;