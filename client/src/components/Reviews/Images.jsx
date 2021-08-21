import React, { useState } from 'react';
import ReviewImgModal from './ReviewImgModal.jsx';

const Images = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="imagesInReviews"
      onClick={(e) => props.recordClick(e)}>
      <img src={props.src} height="80%" width="80%" alt="image added to review" className="reviewImageOpen" onClick={ () => setShow(true) } />
      <ReviewImgModal
        src={props.src}
        show={show} onClose={ () => setShow(false) }
        recordClick={(e) => props.recordClick(e)} />
    </div>
  )
}

export default Images;