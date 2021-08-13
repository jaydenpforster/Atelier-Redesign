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
          console.log('TN Click')
          this.setState({ mainPicture: i })
        }}
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
    // let chosenThumbnail = document.getElementsByClassName(`Thumbnail ${this.state.mainPicture}`)
    // console.log('test', chosenThumbnail.color = 'red')
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

