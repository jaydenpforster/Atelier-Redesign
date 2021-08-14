import React, { useState } from 'react';
import ReviewImgModal from './ReviewImgModal.jsx';

const Images = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <img src={props.src} height="80%" width="80%" className="reviewImageOpen" onClick={ () => setShow(true) } />
      <ReviewImgModal src={props.src} show={show} onClose={ () => setShow(false) }/>
    </div>
  )
}

export default Images

{/* <img src={props.src} height="25%" width="25%" className="reviewImageOpen" onClick={() => setShow(true)} />
<ReviewImgModal src={props.src} onClose={() => setShow(false)} show={show} /> */}