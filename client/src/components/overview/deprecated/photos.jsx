import React from 'react'

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: '',
    };
  }

  renderThumbnails() {
    console.log('this.props', this.props)
    if (this.props === undefined) {
      return <div></div>
    } else {
      console.log('this.props2', this.props.pics)
      let picArr = [];
      for (let pic of this.props.pics) {
        picArr.push(<img onClick={e => {console.log('thumbnail')}} height="150" width="100" src={pic.thumbnail_url}></img>)
      }
      return picArr
    }
  }



  componentDidMount() {

  }

  render() {
    this.renderThumbnails()
    let renderPhoto, renderThumbnails;
    if (this.props.pics === undefined) {
      renderPhoto = <div></div>
      renderThumbnails = <div></div>
    } else {
      renderPhoto = <img height="200" width="150" onClick={e => {console.log('main photo')}} src={this.props.pics[0].url}></img>
      renderThumbnails = renderThumbnails()
    }

    // console.log('this.props2', this.props)
    return (
      <div>
        <div>Photos here</div>
        {renderPhoto}
        {renderThumbnails}
      </div>
    )
  }
}

export default Photos