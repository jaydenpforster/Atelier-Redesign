/* eslint-disable react/prop-types */
import React from 'react';
import RatingBar from './RatingBar.jsx';


class RatingBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recPercentage: 0,
      five: 0,
      four: 0,
      three: 0,
      two: 0,
      one: 0,
      reviewsCount: 0
    }
    this.calculateRecPercentage = this.calculateRecPercentage.bind(this);
    this.calculateReviewTotals = this.calculateReviewTotals.bind(this);
  }

  componentDidMount() {
    this.calculateRecPercentage();
    this.calculateReviewTotals();
  }

  calculateRecPercentage() {
    let recs = this.props.recommended;
    let total = (Number(recs.true) + Number(recs.false));
    let decimal = recs.true / total;
    let percent = decimal * 100;
    this.setState({
      recPercentage: percent,
      reviewsCount: total
    });
  }

  calculateReviewTotals() {
    let ratings = this.props.ratings;
    this.setState({
      five: ratings[5] || 0,
      four: ratings[4] || 0,
      three: ratings[3] || 0,
      two: ratings[2] || 0,
      one: ratings[1] || 0
    })
  }

  render() {
    return (
      <div>
        {this.state.recPercentage}% of reviews recommend this product
        <div className="ratingBreakdown">
          <u>5 stars</u>&nbsp;
          <div className="ratingBarContainer"><RatingBar amount={this.state.five} total={this.props.numOfRatings} /></div>
          &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.five})</p>
          <br></br>

          <u>4 stars</u>&nbsp;
          <div className="ratingBarContainer"><RatingBar amount={this.state.four} total={this.props.numOfRatings} /></div>
          &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.four})</p>
          <br></br>

          <u>3 stars</u>&nbsp;
          <div className="ratingBarContainer"><RatingBar amount={this.state.three} total={this.props.numOfRatings} /></div>
          &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.three})</p>
          <br></br>

          <u>2 stars</u>&nbsp;
          <div className="ratingBarContainer"><RatingBar amount={this.state.two} total={this.props.numOfRatings} /></div>
          &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.two})</p>
          <br></br>

          <u>1 stars</u>&nbsp;
          <div className="ratingBarContainer"><RatingBar amount={this.state.one} total={this.props.numOfRatings} /></div>
          &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.two})</p>
        </div>
      </div>
    )
  }
}

export default RatingBreakdown;
