import React from 'react'
import Photos from './photos.jsx'
import SizeAmount from './sizeAmount.jsx'

class Styles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStyle: 0,
      currentSku: '',
      currentStyleInfo: '',
    };
  }

  renderStyleChoices() {
    // console.log('props', this.props)
    let arr = [];
    let i = 0;
    for (let style of this.props.styles) {
      arr.push(<div
        key={i}
        onClick={(e) => {
          e.preventDefault()
          this.setState({
            currentSku: style.style_id,
            currentStyleInfo: style
          })
          console.log('state', this.state)
        }}
        id={style.style_id}>{style.name}</div>)
      i++;
    }
    return arr;
  }

  render() {
    if (this.state.currentStyleInfo === '') {
      this.setState({
        currentStyleInfo: this.props.styles[0]
      })
    }
    let renderSize, renderPhotos;
    if (this.props.styles === undefined) {
      renderSize = <div></div>
      renderPhotos = <div></div>
    } else {
      renderSize = <SizeAmount sizes={this.state.currentStyleInfo} />
      renderPhotos = <Photos pics={this.state.currentStyleInfo.photos} />
    }
    return (
      <>
        <div>Styles Here!</div>
        <div>Style Choices</div>
        <div>{this.renderStyleChoices()}</div>
        <br></br>

        {/* <div>Style Price: {this.props.currentStyleInfo.original_price}</div> */}
        {renderPhotos}
        {renderSize}
      </>
    )
  }
}
export default Styles