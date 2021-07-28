/* eslint-disable react/prop-types */
import React from 'react';
import RatingBar from './RatingBar.jsx';


class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0,
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0
    }
    //binding
    this.calculatePercentage = this.calculatePercentage.bind(this);
    this.calculateReviewTotals = this.calculateReviewTotals.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.metaData !== prevProps.metaData) {
      this.calculatePercentage();
      this.calculateReviewTotals();
    }
  }

  calculatePercentage() {
    let recs = this.props.metaData.recommended;
    let total = (recs.true + recs.false);
    let decimal = recs.true / total;
    let percent = decimal * 100;
    this.setState({
      percentage: percent
    });
  }

  calculateReviewTotals() {
    let ratingsObj = this.props.metaData.ratings;
    this.setState({
      five: ratingsObj[5] || 0,
      four: ratingsObj[4] || 0,
      three: ratingsObj[3] || 0,
      two: ratingsObj[2] || 0,
      one: ratingsObj[1] || 0
    })
  }

  //ajax request to get array of reviews and percentage recommended

  render() {

    return (
      <div>
        5 stars: {this.state.five}<br></br>
        4 stars: {this.state.four}<br></br>
        3 stars: {this.state.three}<br></br>
        2 stars: {this.state.two}<br></br>
        1 stars: {this.state.one}<br></br>
        {/* {send reviews data to be mapped to RatingBar} */}
        {/* product breakdown form will go here */}

        {/* The percentage of reviews that ‘recommend’
        the product will be displayed below the breakdown. */}

        <h3>{this.state.percentage}% of reviews recommend this product</h3>
      </div>
    )
  }


}

export default RatingBreakdown;