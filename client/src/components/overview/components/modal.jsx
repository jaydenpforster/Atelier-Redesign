import React from 'react'

let Modal = (props) => {
  let thumbnailArr, showSevenTNs;
  if (props !== undefined) {
    thumbnailArr = props.thumbnails.map((element, i) => {
      return (
        <img
          height='150'
          width='120'
          key={i}
          src={props.thumbnails[i].thumbnail_url}
          onClick={e => {
            e.preventDefault()
            props.setMainPhotoIndex('' + i)
          }}
          alt='Thumbnail' ></img>
      )
    })
  }
  let ii = props.thumbnailIndex;

  if (thumbnailArr.length <= 6) {
    showSevenTNs = thumbnailArr;
  } else if (thumbnailArr.length > 1) {
    while (showSevenTNs.length !== 6) {
      if (thumbnailArr[ii] === undefined) {
        ii = 0;
      }
    }
    showSevenTNs.push(thumbnailArr[ii])
    ii++;
  }

  let mainPhoto;
  if (props.thumbnails[props.mainPhotoIndex] !== undefined) {
    mainPhoto = <img
      className="mainModalPhoto"
      onClick={() => {

      }}
      height="250"
      width="200"
      src={props.thumbnails[props.mainPhotoIndex].url}></img>
  }

  if (props.showModal === true) {
    return (
      <div className="OVmodal">
        <div onClick={e => { }} className="OVmodal-content">
          <div className="OVmodal-header">
            <h4 className="OVmodal-title">Title</h4>
          </div>
          <div className="OVmodal-body">
            Modal Content
            {mainPhoto}
            <p
              onClick={e => {

                if (Number(props.mainPhotoIndex) !== props.thumbnails.length - 1) {
                  props.setMainPhotoIndex((Number(props.mainPhotoIndex) + 1) + '')
                } else {
                  props.setMainPhotoIndex('0')
                }
              }}
            >Thumbscroll +</p>
            <p
              onClick={e => {

                if (props.mainPhotoIndex === '0') {
                  props.setMainPhotoIndex(props.thumbnails.length - 1)
                } else {
                  props.setMainPhotoIndex((Number(props.mainPhotoIndex) - 1) + '')
                }
              }}
            >Thumbscroll -</p>
            <br></br>
            {showSevenTNs}
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



export default Modal;