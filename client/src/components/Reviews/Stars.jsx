import React from 'react';

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.averageRating}</h1>
        {/* <div className='starContainer'>
          <div className='starBox' style={{'width': `${this.props.starRating}%`}}>
            <div className='inlineStars'>
              <img className="starsLayout" src="star.png" alt="Star" />
              <img className="starsLayout" src="star.png" alt="Star" />
              <img className="starsLayout" src="star.png" alt="Star" />
              <img className="starsLayout" src="star.png" alt="Star" />
              <img className="starsLayout" src="star.png" alt="Star" />
            </div>
          </div>
        </div> */}
        {this.props.renderStars()}
        <h4>{this.props.numOfRatings} reviews</h4>
      </div>
    )
  }
}


export default Stars