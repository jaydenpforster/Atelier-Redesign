import React from 'react'

let Modal = (props) => {
  console.log('currentStyleInfo', props.currentStyleInfo)
  let thumbnails;
  if (props !== undefined) {
    thumbnails = props.currentStyleInfo.photos.map(pic => {
      <img width='100' height="150" src={pic.thumbnail_url}></img>
    })
    if (props.showModal === true) {
      return (
        <div className="OVmodal">
          <div onClick={e => { }} className="OVmodal-content">
            <div className="OVmodal-header">
              <button onClick={e => {console.log('click X')}}>X</button>
              <h4 className="OVmodal-title">Title</h4>
            </div>
            <div className="OVmodal-body">
              Modal Content
              {thumbnails}
            </div>
            <div className="OVmodal-footer">
              <button onClick={e => { props.setShowModal() }} className="OVmodal-button">Close</button>
            </div>
          </div>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
  return <div></div>
}


export default Modal;