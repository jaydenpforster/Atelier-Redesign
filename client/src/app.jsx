'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Overview from './components/overview/overview.jsx';
import RelatedProducts from './components/relatedProducts/RelatedProducts.jsx';
import QnA from './components/QandA/QandA.jsx';
import Reviews from './components/Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overview: '',
      name: '',
      styles: '',
      related: '',
      mainProductID: '36306',
      relatedProductIDs: '',
      characteristics: {},
      ratings: {},
      recommended: {},
      averageRating: 0,
      starRating: 0,
      helpfulReviews: [],
      newestReviews: [],
      relatedRatings: [],
      questions: []
    }
    this.getAllProductInfo = this.getAllProductInfo.bind(this)
    this.renderStars = this.renderStars.bind(this);
  }

  getAllProductInfo(id) {
    $.ajax({
      url: 'http://localhost:4000/getAllProductInfo',
      type: 'GET',
      data: { id },
      success: (data) => {
        this.setState({
          overview: data[0],
          name: data[0].name,
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
          recommended: data[6].recommended,
          questions: data[7].results,
          relatedRatings: data[8]
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
          relatedRatings={this.state.relatedRatings}
          starRating={this.state.averageRating}
          onClick={this.getAllProductInfo}
        />
        <br></br>
        <QnA
          renderStars={this.renderStars}
          productId={this.state.mainProductID}
          qData={this.state.questions}
        />
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
          name={this.state.name}
          productId={this.state.mainProductID}
        />
      </div>
    )
  }
}

export default App;
