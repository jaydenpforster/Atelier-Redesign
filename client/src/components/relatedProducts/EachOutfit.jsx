import React from 'react';

class EachOutfit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.info.id
    }
    this.click = this.click.bind(this)
  }

  click() {
    this.props.delete(this.state.id)
  }

  render() {
    return (
      <div className="eachOutfit">
        <img src={this.props.info.results[0].photos[0].thumbnail_url}></img>
        <img className="cardStar" value={this.props.info.id} onClick={this.click} src="star.png" alt="stars alt"></img>
        <div className="category">{this.props.info.category}</div>
        <div className="name">{this.props.info.name}</div>
        <div className="description">{this.props.info.description}</div>
        <div className="defaultPrice">${this.props.info.defaultPrice}</div>
        <div>{this.props.renderStars()}</div>
      </div>
    )
  }

}

// const EachOutfit = (props) => {

//   const click = () => {
//     console.log(typeof event.target)
//   }

//   return(
//     <div className="eachOutfit">
//       <img src={props.info.results[0].photos[0].thumbnail_url}></img>
//       <img className="cardStar" value={props.info.id} onClick={click} src="star.png" alt="stars alt"></img>
//       <div className="category">{props.info.category}</div>
//       <div className="name">{props.info.name}</div>
//       <div className="description">{props.info.description}</div>
//       <div className="defaultPrice">${props.info.defaultPrice}</div>
//       <div>{props.renderStars()}</div>
//     </div>
//   )

// }

export default EachOutfit