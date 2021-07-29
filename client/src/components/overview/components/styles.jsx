/*eslint-env es6*/
import React from 'react'
import Thumbnails from './thumbnails.jsx'
import Size from './size.jsx'
import Quantity from './quantity.jsx'

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
    console.log('styles?!?!', this.props.styles)
    for (let style of this.props.styles) {
      arr.push(<div
        onClick={(e) => {
          e.preventDefault()
          console.log('hi')
          console.log(style.style_id)
          this.setState({currentSku: style.style_id})
        }}
        id={style.style_id}>{style.name}</div>)
    }
    return arr;
  }

  render() {
    console.log('styles', this.props.styles)
    let renderSize;
    if (this.props.styles === undefined) {
      renderSize = <div></div>
    } else {
      renderSize = <Size sizes={this.props.styles[this.state.selectedStyle].skus} all={this.props.styles} />
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
      </div>
    )
  }
}
export default Styles