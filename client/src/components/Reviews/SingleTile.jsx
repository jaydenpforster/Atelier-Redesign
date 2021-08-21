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
    ];
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
    this.props.recordClick(event);
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
    (e) => props.recordClick(e);
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
        <Images
          key={`photo-${index}`}
          src={photo.url}
          recordClick={(e) => this.props.recordClick(e)} />
      )
    }

    if (review.recommend) {
      recommends = <div
        className="reviewRecommends"
        onClick={(e) => this.props.recordClick(e)}>
          &#10003; I recommend this product
      </div>
    }

    if (review.response) {
      response = <div
        className="reviewResponse"
        onClick={(e) => this.props.recordClick(e)}>
        <strong>Response from seller: </strong><br></br>
        {review.response}
      </div>;
    }
    return (
      <div>
        <div
          className="singleTile"
          onClick={(e) => this.props.recordClick(e)}>
          <div className="topOfSingleTile">
            {renderStars(review.rating)}<br></br>
            <div className="nameAndDate">
              {review.reviewer_name},&nbsp;{date}<br></br>
            </div>
          </div>
          <strong><p className="reviewSummary" onClick={(e) => this.props.recordClick(e)}>{review.summary}</p></strong>
          <div className="reviewBody">{revBody} <a onClick={this.handleExtendClick}>{show}</a></div>
          <div className="reviewImages">{images}</div>
          {recommends}
          {response}
          <p
            className="reviewHelpful"
            onClick={(e) => this.props.recordClick(e)}>
              Helpful? &nbsp;
            <a
              className="helpfulYes"
              onClick={this.handleHelpfulClick}
              id={this.props.review.review_id}>
              Yes
            </a>
              ({this.state.helpfulness})
          </p>
        </div>
        <br></br>
      </div>
    )
  }
}

export default SingleTile;