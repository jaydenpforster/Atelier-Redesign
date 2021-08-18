import React from 'react';
import Images from './Images.jsx';
import $ from 'jquery';

class SingleTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false,
      voted: false,
      helpfulness: 0
    }
    this.formatDate = this.formatDate.bind(this);
    this.handleExtendClick = this.handleExtendClick.bind(this);
    this.handleHelpfulClick = this.handleHelpfulClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      helpfulness: this.props.review.helpfulness
    })
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

  handleExtendClick(event) {
    this.setState({
      extended: !this.state.extended
    })
  }

  handleHelpfulClick(event) {
    let revId = this.props.review.review_id
    if (this.state.voted === false) {
      $.ajax({
        url: '/reviews/helpful',
        type: 'PUT',
        data: {revId},
        success: () => {
          this.setState((prevState) => ({
            helpfulness: prevState.helpfulness + 1,
            voted: true
          }));
          document.getElementById(revId).style.cursor = 'not-allowed';
          document.getElementById(revId).style.textDecoration = 'none';
        }
      })
    }
  }

  render() {
    let review = this.props.review;
    let renderStars = this.props.renderStars
    let date = this.formatDate(review.date);
    let revBody = review.body;
    let show = '';
    let images,
      recommends,
      response;

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
      recommends = <div>&#10003; I recommend this product</div>
    }

    if (review.response) {
      response = <div className="reviewResponse"><strong>Response from seller: </strong><br></br> {review.response}</div>;
    }
    return (
      <div>
        <div className="singleTile">
          {renderStars(review.rating)}<br></br>
          {review.reviewer_name},&nbsp;{date}<br></br>
          <strong><p className="reviewSummary"></p>{review.summary}</strong><br></br>
          <div className="reviewBody">{revBody} <a onClick={this.handleExtendClick}>{show}</a></div><br></br>
          <div className="reviewImages">{images}</div><br></br>
          {recommends}<br></br>
          {response}
          <p className="reviewHelpful">Helpful? <a className="helpfulYes" onClick={this.handleHelpfulClick} id={this.props.review.review_id}>Yes</a> ({this.state.helpfulness})</p>
        </div>
        <br></br>
      </div>
    )
  }
}

export default SingleTile;