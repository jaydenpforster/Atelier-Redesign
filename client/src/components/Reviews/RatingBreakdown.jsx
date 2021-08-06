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
    if (this.props.metaData !== prevProps.metaData) {
      this.calculatePercentage();
      this.calculateReviewTotals();
    }
  }

  calculatePercentage() {
    let recs = this.props.metaData.recommended;
    let total = (Number(recs.true) + Number(recs.false));
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
        {/* maybe if I turn these into an array I can map it into RatingBar */}
        {/* make number of reviews clickable to then display the reviews */}
        <strong>!!!Rating Breakdown Here!!!</strong>
        <br></br>
        5 stars: {this.state.five} <RatingBar /> <br></br>
        4 stars: {this.state.four} <RatingBar /> <br></br>
        3 stars: {this.state.three} <RatingBar /> <br></br>
        2 stars: {this.state.two} <RatingBar /> <br></br>
        1 stars: {this.state.one} <RatingBar /> <br></br>

        <h3>{this.state.percentage}% of reviews recommend this product</h3>
      </div>
    )
  }

}

export default RatingBreakdown;