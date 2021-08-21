import React from 'react'

const NewPhotos = (props) => {
  // const highlightMe = (class, index) => {
  //   let elements = document.getElementsByClassName(class)
  //   for (let i = 0; i < elements.length; i++) {
  //     elements[i].style.border = ''
  //   }
  //   elements[props.mainPhotoIndex].style.border = '5px solid gold'
  // }

  let thumbnailArr = [];
  for (let i = 0; i < props.thumbnails.length; i++) {

    thumbnailArr.push(
      <img
        className={"sideGallery " + i}
        key={i}
        src={props.thumbnails[i].thumbnail_url}
        onClick={e => {
          e.preventDefault()
          props.setMainPhotoIndex('' + i)

          // // // Change all sideGallery's CSS to have no glow
          // let sideGalleryContainer = document.getElementsByClassName("sideGallery")
          // console.log('sideGalleryContainer', sideGalleryContainer)
          // for (let j = 0; j < sideGalleryContainer.length; j++) {
          //   sideGalleryContainer[j].style.border = ''
          // }
          // // // Change the one's sideGallery's CSS to have glow (sideGalleryContainer[i].style.border = '5px solid gold')
          // sideGalleryContainer[i].style.border = '5px solid gold'
        }}
        alt='Thumbnail' ></img>
    )
  }

  let showThumbs = []
  let ii = props.thumbnailIndex

  if (thumbnailArr.length <= 5) {
    showThumbs = thumbnailArr
  } else if (thumbnailArr.length > 1) {
    while (showThumbs.length !== 5) {

      if (thumbnailArr[ii] === undefined) { ii = 0; }
      showThumbs.push(thumbnailArr[ii])
      ii++;
    }
  }

  let mainPhoto;

  if (props.thumbnails[props.mainPhotoIndex] !== undefined) {
    mainPhoto = <img
      className={"mainPhoto "}
      onClick={() => {
        if (props.showModal === true) {
          props.setShowModal(false)
        } else {
          props.setShowModal(true)
        }
      }}
      src={props.thumbnails[props.mainPhotoIndex].url}></img>
  }
  return (
    <div
      onClick={e => {
        props.clickPhotos()
      }}
      className="OVMainChild1">
      <div
        className="MainPhotoContainer">
        <div className="ThumbnailContainer">
          <p onClick={e => {
            if (props.thumbnailIndex === '0') {
              props.setThumbnailIndex(props.thumbnails.length - 1)
            } else {
              props.setThumbnailIndex((Number(props.thumbnailIndex) - 1) + '')
            }
          }}>{'^'}</p>

          {showThumbs}

          <p onClick={e => {
            if (Number(props.thumbnailIndex) === props.thumbnails.length - 1) {
              props.setThumbnailIndex('0')
            } else {
              props.setThumbnailIndex((Number(props.thumbnailIndex) + 1) + '')
            }
          }}>{'v'}</p>
        </div>
        <button
          className="PrevMainPhoto"
          onClick={e => {

            if (props.mainPhotoIndex === '0') {
              props.setMainPhotoIndex(props.thumbnails.length - 1)
            } else {
              props.setMainPhotoIndex((Number(props.mainPhotoIndex) - 1) + '')
            }
          }}
        >Prev</button>
        {mainPhoto}

        <button
          className="NextMainPhoto"
          onClick={e => {
            if (Number(props.mainPhotoIndex) !== props.thumbnails.length - 1) {
              props.setMainPhotoIndex((Number(props.mainPhotoIndex) + 1) + '')
            } else {
              props.setMainPhotoIndex('0')
            }
          }}
        >Next</button>
      </div>



    </div>)
}


export default NewPhotos