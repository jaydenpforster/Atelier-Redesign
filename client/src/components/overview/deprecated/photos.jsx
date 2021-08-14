import React from 'react'

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPhoto: '',
    };
  }

  renderThumbnails() {

    if (this.props === undefined) {
      return <div></div>
    } else {

      let picArr = [];
      for (let pic of this.props.pics) {
        picArr.push(<img onClick={e => { }} height="150" width="100" src={pic.thumbnail_url}></img>)
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
      renderPhoto = <img height="200" width="150" onClick={e => { }} src={this.props.pics[0].url}></img>
      renderThumbnails = renderThumbnails()
    }


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