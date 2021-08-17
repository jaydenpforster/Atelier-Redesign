import React from 'react';
import ReviewTiles from './ReviewTiles.jsx';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relevantReviews: [],
      value: 'relevant',
      howManyReviews: 0
    }
    this.calculateTotalReviews = this.calculateTotalReviews.bind(this);
    this.sortHelpful = this.sortHelpful.bind(this);
    this.sortNewest = this.sortNewest.bind(this);
    this.sortRelevant = this.sortRelevant.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.filter = this.filter.bind(this);
  }


  calculateTotalReviews() {
    let recs = this.props.recommended;
    let total;
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
    this.setState({
      howManyReviews: total
    })
  }

  sortHelpful(array) {
    for (let i = 0; i < array.length; i++) {
      let hReviewObj = array[i];
      let nextHReviewObj = array[i + 1] || {};
      if (hReviewObj.helpfulness === nextHReviewObj.helpfulness) {
        let hReviewObjDate = new Date(hReviewObj.date);
        let nextHReviewObjDate = new Date(nextHReviewObj.date)
        if (hReviewObjDate.getTime() < nextHReviewObjDate.getTime()) {
          array[i + 1] = hReviewObj;
          array[i] = nextHReviewObj;
          return this.sortHelpful(array);
        }
      }
    }
    return array;
  }

  sortNewest(array) {
    if (array !== null) {
      for (let i = 0; i < array.length; i++) {
        let nReviewObj = array[i];
        let nextNReviewObj = array[i + 1] || {};
        if (nReviewObj.date === nextNReviewObj.date) {
          if (nReviewObj.helpfulness < nextNReviewObj.helpfulness) {
            array[i + 1] = nReviewObj;
            array[i] = nextNReviewObj;
            return this.sortNewest(array);
          }
        }
      }
    }
    return array;
  }

  sortRelevant(helpfulArray, newestArray) {
    let relevantArray = [];
    if (helpfulArray !== null && newestArray !== null) {
      let relevance = {}
      for (let i = 0; i < helpfulArray.length; i++) {
        let hReviewObj = helpfulArray[i];
        relevance[hReviewObj.review_id] = i
      }

      for (let j = 0; j < newestArray.length; j++) {
        let n2ReviewObj = newestArray[j]
        relevance[n2ReviewObj.review_id] += j
      }

      /*byRelevance will be an array of tuples that is sorted by most relevant
        ex. [
        [reviewid, most relevant/lowest score],
        [reviewid, least relevant/highest score]
        ]
      */
      let byRelevance = [];
      for (let reviewId in relevance) {
        byRelevance.push([reviewId, relevance[reviewId]])
      }
      byRelevance.sort(function(a, b) {
        return a[1] - b[1]
      })

      for (let k = 0; k < byRelevance.length; k++) {
        let reviewTuples = byRelevance[k];
        let reviewId = Number(reviewTuples[0])
        for (let m = 0; m < newestArray.length; m++) {
          if (newestArray[m].review_id === reviewId) {
            relevantArray.push(newestArray[m])
          }
        }
      }
    }
    return relevantArray;
  }


  componentDidMount() {
    this.calculateTotalReviews();
    let helpfulReviews = this.sortHelpful(this.props.helpfulReviews);
    let newestReviews = this.sortNewest(this.props.newestReviews);
    let relevantArray = this.sortRelevant(helpfulReviews, newestReviews);
    this.setState({
      relevantReviews: relevantArray
    })
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  filter(filters, reviews) {
    let filteredReviews = [];
    for (let i = 0; i < reviews.length; i++) {
      let currentRating = reviews[i].rating;
      if (filters.includes(currentRating)) {
        filteredReviews.push(reviews[i]);
      }
    }
    return filteredReviews;
  }

  render() {
    let reviewsToPassDown;
    if (this.state.value === 'relevant') {
      reviewsToPassDown = this.state.relevantReviews;
    } else if (this.state.value === 'helpful') {
      reviewsToPassDown = this.props.helpfulReviews;
    } else if (this.state.value === 'newest') {
      reviewsToPassDown = this.props.newestReviews;
    }

    if (this.props.filterNums.length > 0) {
      reviewsToPassDown = this.filter(this.props.filterNums, reviewsToPassDown);
    }

    return (
      <div>
        <label>
          <h4>{reviewsToPassDown.length} reviews, sorted by &nbsp;
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="relevant">relevance</option>
              <option value="helpful">helpfulness</option>
              <option value="newest">date</option>
            </select>
          </h4>
        </label>
        <ReviewTiles
          reviews={reviewsToPassDown}
          renderStars={this.props.renderStars}
          name={this.props.name}
          characteristics={this.props.characteristics} />
      </div>
    )
  }
}

export default Sort;