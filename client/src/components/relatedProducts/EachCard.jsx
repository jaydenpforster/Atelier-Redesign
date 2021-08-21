import React from 'react';
import Modal from './Modal.jsx';

class EachCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      rating: this.props.relatedRatings
    }
    this.modalClick = this.modalClick.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.click = this.click.bind(this);
  }

  modalClick() {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }

  modalClose() {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }

  click() {
    this.props.onClick(this.props.info.id);

  }

  render() {
    if (this.props.info.salePrice !== null) {
      return (
        <div className="eachCard">
          {this.props.info.results[0].photos[0].thumbnail_url ?
            <img className="cardImg" onClick={this.click} src={this.props.info.results[0].photos[0].thumbnail_url}></img> :
            <img className="cardImg" onClick={this.click} src="comingsoon.png"></img>}
          <img className="cardStar" onClick={this.modalClick} src="relatedstar.png" alt="stars alt"></img>
          <div className="textInfo">
            <div className="category">{this.props.info.category}</div>
            <div className="name">{this.props.info.name}</div>
            <div className="description">{this.props.info.description}</div>
            <div className="defaultPrice" style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>${this.props.info.defaultPrice}</div>
            <div className='starContainer'>
              <div className='starBox' style={{ 'width': `${this.props.info.rating}%` }}>
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
          <Modal
            show={this.state.modalShow}
            close={this.modalClose}
            info={this.props.info}
            overViewProd={this.props.overViewProd}
            overViewStyles={this.props.overViewStyles}
          />
        </div>
      )
    }
    return (
      <div className="eachCard" onClick={e => {this.props.tracker()}}>
        {this.props.info.results[0].photos[0].thumbnail_url ?
          <img className="cardImg" onClick={this.click} src={this.props.info.results[0].photos[0].thumbnail_url}></img> :
          <img className="cardImg" onClick={this.click} src="comingsoon.png"></img>}
        <img className="cardStar" onClick={this.modalClick} src="relatedstar.png" alt="stars alt"></img>
        <div className="textInfo">
          <div className="category">{this.props.info.category}</div>
          <div className="name">{this.props.info.name}</div>
          <div className="description">{this.props.info.description}</div>
          <div className="defaultPrice">${this.props.info.defaultPrice}</div>
          <div className='starContainer'>
            <div className='starBox' style={{ 'width': `${this.props.info.rating}%` }}>
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
        <Modal
          show={this.state.modalShow}
          close={this.modalClose}
          info={this.props.info}
          overViewProd={this.props.overViewProd}
          overViewStyles={this.props.overViewStyles}
        />
      </div>
    )
  }
}

export default EachCard;

