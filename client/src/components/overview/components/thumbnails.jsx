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
      arr.push(<img
        className={`Thumbnail ${i}`}
        onClick={e => {console.log('TN Click')}}
        key={i} alt="thumbnail"
        src={this.props.pics[i].thumbnail_url}></img>)
    }
    return <div className="Thumbnail Container">
      <a className="Prev" onClick={e => { console.log('Prev') }}>Prev</a>
      {arr}
      <a className="Next" onClick={e => { console.log('Next') }} >Next</a>
    </div>
  }

  render() {
    return (
      <>
        <div>Thumbnail here!</div>
        {this.renderThumbnails()}
      </>
    )
  }
}
export default Thumbnail