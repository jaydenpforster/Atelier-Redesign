import React from 'react';
import $ from 'jquery';
import QuarterStars from './Stars.jsx';
import Sort from './Sort.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      total: 0
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getStarRating = this.getStarRating.bind(this);
  }

  componentDidMount() {
    this.getStarRating();
  }

  getStarRating() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:4000/reviews/reviews',
      data: {id: '28212'},
      success: (response) => {
        this.setState({
          rating: response.average,
          total: response.total
        });
      },
      error: (err) => {
        console.log('Error in getStarRating(): ', err);
      }
    })
  }

  render() {
    return (
      <div>
        <QuarterStars rating={this.state.rating}/>
        <Sort rating={this.state.total} />
      </div>
    )
  }

}


export default RatingsAndReviews;
