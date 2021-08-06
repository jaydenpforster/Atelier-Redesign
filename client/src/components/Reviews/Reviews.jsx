import React from 'react';
import $ from 'jquery';
import Stars from './Stars.jsx';
import Sort from './Sort.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import FactorsBreakdown from './FactorsBreakdown.jsx';
import ReviewTiles from './ReviewTiles.jsx';
import ReviewForm from './ReviewForm.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfRatings: 0,
      changed: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      console.log('I am props!', this.props)
      this.setState({
        numOfRatings: Object.keys(this.props.ratings).length,
        changed: true
      })
    }
  }



  // click handler for more Reviews button

  // click handler for add a review button

  render() {
    if (this.state.changed) {
      return (
        <div>
          <h1>I am reviews</h1>
          <Stars
            renderStars={this.props.renderStars}
            averageRating={this.props.averageRating}
            numOfRatings={this.state.numOfRatings}
          />
          {/*
          <br></br>

          <RatingBreakdown
            metaData={this.state.metaData}
            reviews={this.state.reviews} />

          <br></br>

          <FactorsBreakdown />

          <br></br>

          <Sort getReviews={this.getReviews} />

          <br></br>

          <ReviewTiles /> */}
          {/* more reviews button with onClick */}
          {/* add a review button with onClick*/}
        </div>
      )
    } else {
      return null;
    }
  }

}


export default Reviews;
