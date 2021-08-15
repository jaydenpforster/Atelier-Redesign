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
      changed: false,
      filterNums: []
    }
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleRemoveFiltersClick = this.handleRemoveFiltersClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        numOfRatings: Object.keys(this.props.ratings).length,
        changed: true
      })
    }
  }


  handleFilterClick(event) {
    let filterNumber = (event.target.innerText).slice(0, 1);
    filterNumber = Number(filterNumber);
    if (this.state.filterNums.includes(filterNumber)) {
      this.setState(prevState => ({
        filterNums: prevState.filterNums.filter(num => num !== filterNumber)
      }));
    } else {
      this.setState(prevState => {
        let filterNums = prevState.filterNums.concat(filterNumber);
        return {
          filterNums
        }
      });
    }
  }

  handleRemoveFiltersClick() {
    this.setState({
      filterNums: []
    })
  }

  // click handler for add a review button

  render() {
    if (this.state.changed) {
      return (
        <div>
          <h1>Reviews</h1>
          <Stars
            renderStars={this.props.renderStars}
            averageRating={this.props.averageRating}
            numOfRatings={this.state.numOfRatings} />
          <br></br>
          <RatingBreakdown
            ratings={this.props.ratings}
            recommended={this.props.recommended}
            filter={this.handleFilterClick}
            filterNums={this.state.filterNums}
            removeFilters={this.handleRemoveFiltersClick} />
          <br></br>
          <br></br>
          <FactorsBreakdown characteristics={this.props.characteristics} />
          <br></br>
          <Sort
            helpfulReviews={this.props.helpfulReviews}
            newestReviews={this.props.newestReviews}
            recommended={this.props.recommended}
            renderStars={this.props.renderStars}
            filterNums={this.state.filterNums} />
          <br></br>
          {/*
          more reviews button with onClick
          add a review button with onClick
          */}
        </div>
      )
    } else {
      return null;
    }
  }
}

export default Reviews;
