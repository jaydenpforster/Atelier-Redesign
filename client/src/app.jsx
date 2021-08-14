'use strict';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import Overview from './components/overview/overview.jsx';
import RelatedProducts from './components/relatedProducts/RelatedProducts.jsx';
import QnA from './components/QandA/QandA.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
// import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cart: 'GET /cart
      overview: '',
      styles: '',
      related: '',
      mainProductID: '36300',
      relatedProductIDs: '',
      characteristics: {},
      ratings: {},
      recommended: {},
      averageRating: 0,
      starRating: 0,
      helpfulReviews: [],
      newestReviews: []
    }
    //bind
    this.getAllProductInfo = this.getAllProductInfo.bind(this)
    this.renderStars = this.renderStars.bind(this);
  }

  //GET REQUESTS

  //Overview
  //productId
  //style
  //stars
  //cart

  //Related Products / Main
  //productId
  //style
  //stars

  //QandA
  //...

  //Revies
  //productId
  //stars / reviews
  //metadata

  getAllProductInfo(id) {
    $.ajax({
      url: 'http://localhost:4000/getAllProductInfo',
      type: 'GET',
      data: { id },
      success: (data) => {
        this.setState({
          overview: data[0],
          styles: data[1],
          related: data[2],
          mainProductID: data[1].product_id,
          relatedProductIDs: data[3],
          helpfulReviews: data[4],
          newestReviews: data[5],
          averageRating: data[6].avgRating.averageRating,
          starRating: data[6].avgRating.ratingPercentage,
          characteristics: data[6].characteristics,
          ratings: data[6].ratings,
          recommended: data[6].recommended
        })
      },
      error: (data) => {
        console.log('Error', data);
      }
    });
  }

  componentDidMount() {
    this.getAllProductInfo(this.state.mainProductID)
  }

  renderStars(rating) {
    rating = (rating / 5) * 100 || this.state.starRating;
    return (
      <div className='starContainer'>
        <div className='starBox' style={{ 'width': `${rating}%` }}>
          <div className='inlineStars'>
            <img className="starsLayout" src="star.png" alt="Star" />
            <img className="starsLayout" src="star.png" alt="Star" />
            <img className="starsLayout" src="star.png" alt="Star" />
            <img className="starsLayout" src="star.png" alt="Star" />
            <img className="starsLayout" src="star.png" alt="Star" />
          </div>
        </div>
      </div>
    )
  }

  render() {

    let overview;
    if (this.state.overview.id === undefined) {
      overview = <></>
    } else {
      overview = <Overview
        renderStars={this.renderStars}
        overview={this.state.overview}
        styles={this.state.styles} />
    }
    return (
      <div>
        <h1></h1>
        {overview}
        <br></br>
        <RelatedProducts
          info={this.state.relatedProductIDs}
          detailInfo={this.state.related}
          overViewProd={this.state.overview}
          overViewStyles={this.state.styles}
          renderStars={this.renderStars}
          starRating={this.state.starRating}
          onClick={this.getAllProductInfo}
        />
        <br></br>
        <QnA renderStars={this.renderStars} />
        <br></br>
        <Reviews
          helpfulReviews={this.state.helpfulReviews}
          newestReviews={this.state.newestReviews}
          averageRating={this.state.averageRating}
          starRating={this.state.starRating}
          characteristics={this.state.characteristics}
          ratings={this.state.ratings}
          recommended={this.state.recommended}
          renderStars={this.renderStars}
        />
      </div>
    )
  }
}


// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
