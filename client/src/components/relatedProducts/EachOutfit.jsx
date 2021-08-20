import React from 'react';

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
  }

  render() {
    return (
      <div className="eachOutfit">
        {this.props.info.results[0].photos[0].thumbnail_url ?
          <img className="cardImg" onClick={this.click} src={this.props.info.results[0].photos[0].thumbnail_url}></img> :
          <img className="cardImg" onClick={this.click} src="comingsoon.png"></img>}
        <img className="cardStar" onClick={this.click} src="x.png" alt="stars alt"></img>
        <div className="textInfo">
          <div className="category">{this.props.info.category}</div>
          <div className="name">{this.props.info.name}</div>
          <div className="description">{this.props.info.description}</div>
          <div className="defaultPrice">${this.props.info.defaultPrice}</div>
          <div className='starContainer'>
            <div className='starBox' style={{ 'width': `${(this.props.info.averageRating / 5) * 100}%` }}>
              <div className='inlineStars'>
                <img className="starsLayout" src="star.png" alt="Star" />
                <img className="starsLayout" src="star.png" alt="Star" />
                <img className="starsLayout" src="star.png" alt="Star" />
                <img className="starsLayout" src="star.png" alt="Star" />
                <img className="starsLayout" src="star.png" alt="Star" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default EachOutfit