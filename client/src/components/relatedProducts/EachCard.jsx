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
    console.log('CLICKED');
    this.setState({
      modalShow: !this.state.modalShow
    })
    console.log('STATE', this.state)
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

// const EachCard = (props) => {

//   let clicked = (event) => {
//     console.log('CLICKED', event)
//   }

//   return (

//     <div className="eachCard">
//       <img src={props.info.results[0].photos[0].thumbnail_url}></img>
//       <img onClick={props.onClick} className="cardStar" src="star.png" alt="stars alt"></img>
//       <div className="category">{props.info.category}</div>
//       <div className="name">{props.info.name}</div>
//       <div className="description">{props.info.description}</div>
//       <div className="defaultPrice">${props.info.defaultPrice}</div>
//     </div>
//   )
// }

export default EachCard;