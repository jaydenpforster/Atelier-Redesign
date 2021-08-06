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
      mainProductID: '28215',
      relatedProductIDs: '',
      characteristics: {},
      ratings: {},
      recommended: {},
      averageRating: 0,
      starRating: 0,
      reviews: []
    }
    //bind
    this.getAllProductInfo = this.getAllProductInfo.bind(this)
    this.renderStars = this.renderStars.bind(this);
    this.handleRelatedProductClick = this.handleRelatedProductClick.bind(this);
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
  handleRelatedProductClick(id) {
    console.log(`ID: ${id} was clicked`)
    $.ajax({
      url: 'http://localhost:4000/getAllProductInfo',
      type: 'GET',
      data: { id },
      success: (data) => {
        console.log('Success', data);
        this.setState({
          overview: data[0],
          styles: data[1],
          related: data[2],
          mainProductID: data[1].product_id,
          relatedProductIDs: data[3],
          reviews: data[4],
          averageRating: data[5].avgRating.averageRating,
          starRating: data[5].avgRating.ratingPercentage,
          characteristics: data[5].characteristics,
          ratings: data[5].ratings,
          recommended: data[5].recommended
        })
      },
      error: (data) => {
        console.log('Error', data);
      }
    });

  }

  getAllProductInfo(id) {
    $.ajax({
      url: 'http://localhost:4000/getAllProductInfo',
      type: 'GET',
      data: { id },
      success: (data) => {
        console.log('Success', data);
        this.setState({
          overview: data[0],
          styles: data[1],
          related: data[2],
          mainProductID: data[1].product_id,
          relatedProductIDs: data[3],
          reviews: data[4],
          averageRating: data[5].avgRating.averageRating,
          starRating: data[5].avgRating.ratingPercentage,
          characteristics: data[5].characteristics,
          ratings: data[5].ratings,
          recommended: data[5].recommended
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

  renderStars() {
    return (
      <div className='starContainer'>
        <div className='starBox' style={{'width': `${this.state.starRating}%`}}>
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
    return (
      <div>
        {console.log('STATE', this.state.mainProductID)}
        <h1></h1>
        <Overview renderStars={this.renderStars}/>
        <br></br>
        <RelatedProducts
          info={this.state.relatedProductIDs}
          detailInfo={this.state.related}
          overViewProd={this.state.overview}
          overViewStyles={this.state.styles}
          renderStars={this.renderStars}
          onClick={this.handleRelatedProductClick}
        />
        <br></br>
        <QnA renderStars={this.renderStars}/>
        <br></br>
        <Reviews
          reviews={this.state.reviews}
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
