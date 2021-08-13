import React from 'react';
import Images from './Images.jsx';

class SingleTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false
    }
    this.formatDate = this.formatDate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  formatDate(dateString) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    let d = new Date(dateString);
    let month = months[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();
    return `${month} ${day}, ${year}`;
  }

  handleClick(event) {
    this.setState({
      extended: !this.state.extended
    })
    //on click, reviewBody = fullReview
    //show more becomes show less
  }

  render() {
    let review = this.props.review;
    let renderStars = this.props.renderStars
    let date = this.formatDate(review.date);
    let revBody = review.body;
    let show = '';
    let images;
    let recommends;
    let response;

    if (review.body.length > 250) {
      show = <u>Show more</u>
      revBody = review.body.slice(0, 250);
    }
    if (this.state.extended) {
      revBody = review.body;
      show = <u>Show less</u>
    } else {
      revBody = review.body.slice(0, 250);
    }

    if (review.photos.length > 0) {
      images = review.photos.map((photo, index) =>
        <Images key={`photo-${index}`} src={photo.url} />
      )
    }

    if (review.recommend) {
      recommends = 'I recommend this product'
    }

    if (review.response) {
      response = 'Response from seller: ' + <br></br> + review.response + <br></br>;
    }
    return (
      <div>
        <div className="singleTile">
          {renderStars(review.rating)}<br></br>
          {review.reviewer_name},&nbsp;{date}<br></br>
          <strong><p className="reviewSummary"></p>{review.summary}</strong><br></br>
          <div className="reviewBody">{revBody} <a onClick={this.handleClick}>{show}</a></div><br></br>
          <div className="reviewImages">{images}</div><br></br>
          {recommends}
          <div className="reviewResponse">{response}</div>
          <p className="reviewHelpful">Helpful? <u>Yes</u> ({review.helpfulness})</p>
        </div>
        <br></br>
      </div>
    )
  }
}


export default SingleTile;


//TO DO: give image thumbnail ability to open in a modal window
//displaying at full resolution with ability to close the window

//TO DO: ability to click "yes" next to helpful, add to the amount voted yes,
//and disable clicking after a vote.

// console.log('Rating Helpfulness: ', review.helpfulness)
