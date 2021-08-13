import React from 'react'

const NewPhotos = (props) => {
  let thumbnailArr = [];
  for (let i = 0; i < props.thumbnails.length; i++) {
    thumbnailArr.push(
      <img
        height='150'
        width='120'
        key={i}
        src={props.thumbnails[i].thumbnail_url}
        onClick={e => {
          e.preventDefault()
          props.setMainPhoto(props.thumbnails[i].url)
          props.setThumbnailIndex('' + i)
        }}
        alt='Thumbnail' ></img>
    )
  }
  let mainPhoto = <img
    className="mainPhoto"
    onClick={e => {
      console.log('before', props.showModal)
      if (props.showModal === true) {
        props.setShowModal(false)
      } else {
        props.setShowModal(true)
      }
      // props.setShowModal(!props.showModal)
      // console.log('after', props.showModal)
    }}
    height="250"
    width="200"
    src={props.thumbnails[props.thumbnailIndex].url}></img>

  return (
    <div>
      {mainPhoto}
      <br></br>
      <p onClick={e => {
        if (props.thumbnailIndex === '0') {
          props.setThumbnailIndex(props.thumbnails.length - 1)
        } else {
          props.setThumbnailIndex((Number(props.thumbnailIndex) - 1) + '')
        }
      }}>{'<'}</p>
      {thumbnailArr}
      <p onClick={e => {
        if (Number(props.thumbnailIndex) === props.thumbnails.length - 1) {
          props.setThumbnailIndex('0')
        } else {
          props.setThumbnailIndex((Number(props.thumbnailIndex) + 1) + '')
        }
      }}>{'>'}</p>
    </div>)
}

export default NewPhotos