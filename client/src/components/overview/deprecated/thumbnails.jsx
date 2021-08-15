/*eslint-env es6*/
import React from 'react'

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      features: '',
      mainPicture: '0'
    };
  }
  renderThumbnails() {
    let arr = [];
    for (let i = 0; i < this.props.pics.length; i++) {
      arr.push(<img
        height="100"
        width="75"
        className={`Thumbnail ${i}`}
        onClick={e => {

          this.setState({ mainPicture: i })
        }}
        key={i} alt="thumbnail"
        src={this.props.pics[i].thumbnail_url}></img>)
    }
    return <div className="Thumbnail Container">
      <a className="Prev" onClick={e => {  }}>Prev</a>
      {arr}
      <a className="Next" onClick={e => {  }} >Next</a>
    </div>
  }

  render() {

    return (
      <>
        <div>Photos here!</div>
        <img height="150" width="100" src={this.props.pics[this.state.mainPicture].url}></img>
        {this.renderThumbnails()}
      </>
    )
  }
}
export default Thumbnail

