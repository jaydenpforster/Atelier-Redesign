import React from 'react';
import axios from 'axios';
import config from '../../../../config.js';

class EachOutfit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.info.id
    }
    this.click = this.click.bind(this);

  }

  click() {
    this.props.delete(this.props.info.id);

    let time = new Date()
    axios({
      method: 'POST',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
      headers: {
        'Authorization': config.TOKEN
      },
      data: {
        element: 'Your Outfit Delete',
        widget: 'Related Products',
        time: time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + '-' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
      }
    })
  }

  render() {
    return (
      <div className="eachOutfit">
        {this.props.info.results[0].photos[0].thumbnail_url ?
          <img className="cardImg" src={this.props.info.results[0].photos[0].thumbnail_url}></img> :
          <img className="cardImg" src="comingsoon.png"></img>}
        <img className="cardStar" onClick={this.click} src="x.png" alt="stars alt"></img>
        <div className="textInfo">
          <div className="category">{this.props.info.category}</div>
          <div className="name">{this.props.info.name}</div>
          <div className="description">{this.props.info.description}</div>
          <div className="defaultPrice">${this.props.info.defaultPrice}</div>
          <div className='starContainer'>
            <div className='starBox' style={{ 'width': `${(this.props.info.averageRating / 5) * 100}%` }}>
              <div className='inlineStars'>
                <img className="starsLayout" src="star.png" height="5" width="5" alt="Star" />
                <img className="starsLayout" src="star.png" height="5" width="5" alt="Star" />
                <img className="starsLayout" src="star.png" height="5" width="5" alt="Star" />
                <img className="starsLayout" src="star.png" height="5" width="5" alt="Star" />
                <img className="starsLayout" src="star.png" height="5" width="5" alt="Star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default EachOutfit