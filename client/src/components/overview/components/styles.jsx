/*eslint-env es6*/
import React from 'react'
import Thumbnails from './thumbnails.jsx'
import Size from './size.jsx'
// import Quantity from './quantity.jsx'

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      features: '',
      selectedStyle: 0,
      mainUrl: '',
      thumbUrls: [],
      currentSku: '',
    };
  }


  renderStyleChoices() {
    let arr = [];
    let i = 0;
    // console.log('styles?!?!', this.props.styles)
    // eslint-disable-next-line react/prop-types
    for (let style of this.props.styles) {
      arr.push(<div
        key={i}
        onClick={(e) => {
          e.preventDefault()
          // console.log('hi')
          // console.log(style.style_id)
          this.setState({currentSku: style.style_id})
        }}
        id={style.style_id}>{style.name}</div>)
      i++;
    }
    return arr;
  }
  renderQuantityPerSize() {

  }

  render() {
    // console.log('styles', this.props.styles)
    let renderSize, renderQuantity;
    if (this.props.styles === undefined) {
      renderSize = <div></div>
      renderQuantity = <div></div>
    } else {
      renderSize = <Size sizes={this.props.styles[this.state.selectedStyle].skus} all={this.props.styles} />
      renderQuantity = <div></div>
    }
    return (
      <div>
        <div>Styles Here!</div>
        <div>Style Choices</div>
        <div>{this.renderStyleChoices()}</div>
        <br></br><br></br>
        <img alt={'Photo'} height="300" width="200" src={this.props.styles[this.state.selectedStyle].photos[0].url}></img>
        <div>Style Price: {this.props.styles[this.state.selectedStyle].original_price}</div>
        <Thumbnails pics={this.props.styles[this.state.selectedStyle].photos} />
        {renderSize}
        {renderQuantity}
      </div>
    )
  }
}
export default Styles