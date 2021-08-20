import React from 'react';

const ReviewImgModal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div className="revImgModal" onClick={(e) => props.recordClick(e)}>
      <div className="revImgModal-content">
        <div className="revImgModal-body">
          <img src={props.src} height="100%" width="100%" className="reviewImageClose" onClick={props.onClose} />
        </div>
      </div>
    </div>
  )
}

export default ReviewImgModal;
