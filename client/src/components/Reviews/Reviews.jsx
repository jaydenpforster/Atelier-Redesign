import React from 'react';
import $ from 'jquery';
import Stars from './Stars.jsx';
import Sort from './Sort.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import Factors from './Factors.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      metaData: {}
    }

    this.getReviews = this.getReviews.bind(this);
    this.getMetaData = this.getMetaData.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getMetaData();
  }

  getReviews() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:4000/reviews/reviews',
      data: {id: '28212'},
      success: (response) => {
        this.setState({
          reviews: response
        });
      },
      error: (err) => {
        console.log('Error in getStarRating(): ', err);
      }
    })
  }

  getMetaData() {
    //ajax request to get meta data characteristics
    $.ajax({
      type: 'get',
      url: 'http://localhost:4000/reviews/meta',
      data: {id: '28212'},
      success: (response) => {
        this.setState({
          metaData: response
        });
      },
      error: (err) => {
        console.log('Error in getCharacteristics(): ', err);
      }
    })
  }

  render() {

    return (
      <div>
        <Stars ratings={this.state.metaData.ratings} />
        <RatingBreakdown
          metaData={this.state.metaData}
          reviews={this.state.reviews}
        />

        {/* <Sort rating={this.state.metaData} /> */}
        <Factors />
      </div>
    )
  }

}


export default RatingsAndReviews;
