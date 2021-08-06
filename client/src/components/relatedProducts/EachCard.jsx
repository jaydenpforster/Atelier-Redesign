import React from 'react';
import Modal from './Modal.jsx';

class EachCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
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
    return (
      <div className="eachCard">
        <img onClick={this.click} src={this.props.info.results[0].photos[0].thumbnail_url}></img>
        <img onClick={this.modalClick} className="cardStar" src="star.png" alt="stars alt"></img>
        <div className="category">{this.props.info.category}</div>
        <div className="name">{this.props.info.name}</div>
        <div className="description">{this.props.info.description}</div>
        <div className="defaultPrice">${this.props.info.defaultPrice}</div>
        <div>{this.props.renderStars()}</div>
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