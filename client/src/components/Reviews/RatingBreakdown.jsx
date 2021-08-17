import React from 'react';
import ReviewTiles from './ReviewTiles.jsx';
import AppliedFilter from './AppliedFilter.jsx'

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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.calculateRecPercentage();
    this.calculateReviewTotals();
  }

  calculateRecPercentage() {

    let recs = this.props.recommended;
    let total,
      decimal,
      percent;
    if (Object.keys(recs).length === 0) {
      total = 0
    } else if (Object.keys(recs).length === 1) {
      if (recs.true) {
        total = Number(recs.true)
      } else {
        total = Number(recs.false)
      }
    } else {
      total = (Number(recs.true) + Number(recs.false));
    }

    if (recs.true) {
      decimal = Number((recs.true / total).toFixed(1));
      percent = (decimal * 100);
    } else {
      percent = 0
    }

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

  handleClick(event) {
    this.props.filter(event);
  }

  render() {
    let totalCountOfReviews = this.state.reviewsCount;
    let fivePortion = (this.state.five / totalCountOfReviews) * 100;
    let fourPortion = (this.state.four / totalCountOfReviews) * 100;
    let threePortion = (this.state.three / totalCountOfReviews) * 100;
    let twoPortion = (this.state.two / totalCountOfReviews) * 100;
    let onePortion = (this.state.one / totalCountOfReviews) * 100;
    let filterMessageStart;
    let filterMessageEnd;
    let appliedFilters;

    if (this.props.filterNums.length > 0) {
      filterMessageStart = <div>Applied filters:</div>
      filterMessageEnd = <div className="removeFilters" onClick={this.props.removeFilters}><u>Remove Filters</u></div>

      appliedFilters = this.props.filterNums.map((filter, index) =>
        <AppliedFilter key={`filter-${index}`} filterNumber={filter} />
      )
    }

    return (
      <div>
        <div className="ratingBreakdown">
          <strong>Rating Breakdown</strong>
          {filterMessageStart}
          <div className="filterMessages">
            {appliedFilters}
          </div>
          {filterMessageEnd}
          <div className="fullRatingLine" onClick={this.handleClick}>
            <u>5 stars</u>&nbsp;
            <div className="ratingBarContainer"><div className="ratingBar" style={{'width': `${fivePortion}%`}}></div></div>
            &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.five})</p>
          </div>

          <div className="fullRatingLine" onClick={this.handleClick}>
            <u>4 stars</u>&nbsp;
            <div className="ratingBarContainer"><div className="ratingBar" style={{'width': `${fourPortion}%`}}></div></div>
            &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.four})</p>
          </div>

          <div className="fullRatingLine" onClick={this.handleClick}>
            <u>3 stars</u>&nbsp;
            <div className="ratingBarContainer"><div className="ratingBar" style={{'width': `${threePortion}%`}}></div></div>
            &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.three})</p>
          </div>

          <div className="fullRatingLine" onClick={this.handleClick}>
            <u>2 stars</u>&nbsp;
            <div className="ratingBarContainer"><div className="ratingBar" style={{'width': `${twoPortion}%`}}></div></div>
            &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.two})</p>
          </div>

          <div className="fullRatingLine" onClick={this.handleClick}>
            <u>1 star </u>&nbsp;
            <div className="ratingBarContainer"><div className="ratingBar" style={{'width': `${onePortion}%`}}></div></div>
            &nbsp;<p style={{'fontSize': '90%', 'display': 'inline-block'}}>({this.state.one})</p>
          </div>
          <br></br>

          <span className="recPercentage">{this.state.recPercentage}% of reviews recommend this product</span>
        </div>
      </div>
    )
  }
}

export default RatingBreakdown;