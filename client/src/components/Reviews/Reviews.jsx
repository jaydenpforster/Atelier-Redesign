import React from 'react';
import Stars from './Stars.jsx';
import Sort from './Sort.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import FactorsBreakdown from './FactorsBreakdown.jsx';
import ClickTracker from './ClickTracker.jsx';

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

  handleRemoveFiltersClick(event) {
    this.setState({
      filterNums: []
    })
  }

  render() {
    if (this.state.changed) {
      return (
        <ClickTracker>
          {tracker => (
            <div>
              <h3>Ratings & Reviews</h3>
              <div id="theReviews">
                <div id="leftBlock">
                  <div id="ratingsBlock">
                    <Stars
                      recordClick={tracker.recordClick}
                      renderStars={this.props.renderStars}
                      averageRating={this.props.averageRating}
                      numOfRatings={this.state.numOfRatings} />
                    <br></br>
                    <RatingBreakdown
                      recordClick={tracker.recordClick}
                      ratings={this.props.ratings}
                      recommended={this.props.recommended}
                      filter={this.handleFilterClick}
                      filterNums={this.state.filterNums}
                      removeFilters={this.handleRemoveFiltersClick} />
                    <br></br>
                    <br></br>
                  </div>
                  <div id="factorsBlock">
                    <FactorsBreakdown
                      recordClick={tracker.recordClick}
                      characteristics={this.props.characteristics} />
                    <br></br>
                  </div>
                </div>
                <div id="rightBlock">
                  <Sort
                    recordClick={tracker.recordClick}
                    helpfulReviews={this.props.helpfulReviews}
                    newestReviews={this.props.newestReviews}
                    recommended={this.props.recommended}
                    renderStars={this.props.renderStars}
                    filterNums={this.state.filterNums}
                    name={this.props.name}
                    characteristics={this.props.characteristics}
                    productId={this.props.productId} />
                  <br></br>
                </div>
              </div>
            </div>
          )}
        </ClickTracker>
      )
    } else {
      return null;
    }
  }
}

export default Reviews;