import React from 'react'
/**
Array of thumbnail photos
all of them
pick 4 from the array based on index
show the four
 */

const NewPhotos = (props) => {

  let thumbnailArr = [];
  for (let i = 0; i < props.thumbnails.length; i++) {
    // if (thumbnailArr.length === 4) { break; }
    thumbnailArr.push(
      <img
        className="sideGallery"
        key={i}
        src={props.thumbnails[i].thumbnail_url}
        onClick={e => {
          e.preventDefault()
          props.setMainPhotoIndex('' + i)
        }}
        alt='Thumbnail' ></img>
    )
  }
  // No While Loop. Make a Function. Make Edge Case for less than 7 photos
  let showFour = []
  let ii = props.thumbnailIndex

  if (thumbnailArr.length <= 4) {
    showFour = thumbnailArr
  } else if (thumbnailArr.length > 1) {
    while (showFour.length !== 4) {

      if (thumbnailArr[ii] === undefined) { ii = 0; }
      showFour.push(thumbnailArr[ii])
      ii++;
    }
  }

  let mainPhoto;

  if (props.thumbnails[props.mainPhotoIndex] !== undefined) {
    mainPhoto = <img
      className="mainPhoto"
      onClick={() => {
        if (props.showModal === true) {
          props.setShowModal(false)
        } else {
          props.setShowModal(true)
        }

      }}
      // height="250"
      // width="200"
      src={props.thumbnails[props.mainPhotoIndex].url}></img>
  }

  return (
    <div className="OVMainChild1">
      {mainPhoto}
      <br></br>
      <p
        onClick={e => {

          if (Number(props.mainPhotoIndex) !== props.thumbnails.length - 1) {
            props.setMainPhotoIndex((Number(props.mainPhotoIndex) + 1) + '' )
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
            props.setMainPhotoIndex((Number(props.mainPhotoIndex) - 1) + '' )
          }
        }}
      >Thumbscroll -</p>
      <p onClick={e => {
        if (props.thumbnailIndex === '0') {
          props.setThumbnailIndex(props.thumbnails.length - 1)
        } else {
          props.setThumbnailIndex((Number(props.thumbnailIndex) - 1) + '')
        }
      }}>{'<'}</p>

      {showFour}

      <p onClick={e => {
        if (Number(props.thumbnailIndex) === props.thumbnails.length - 1) {
          props.setThumbnailIndex('0')
        } else {
          props.setThumbnailIndex((Number(props.thumbnailIndex) + 1) + '')
        }
      }}>{'>'}</p>
    </div>)
}


// Carousel
/**
on click of next
run a function that changes state
based on state, make next thumbnails!
 */

export default NewPhotos