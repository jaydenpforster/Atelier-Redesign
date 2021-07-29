/*eslint-env es6*/
import React from 'react'

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      features: '',
    };
  }
  renderThumbnails() {
    let arr = [];
    for (let i = 0; i < this.props.pics.length; i++) {
      arr.push(<img alt="thumbnail" src={this.props.pics[i].thumbnail_url}></img>)
    }
    return <div>{arr}</div>
  }

  render() {
    console.log('there?!', this.props.pics)
    return (
      <div>
        <div>Thumbnail here!</div>
        {this.renderThumbnails()}
      </div>
    )
  }
}
export default Thumbnail