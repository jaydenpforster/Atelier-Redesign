import React, {useState} from 'react';
import ReviewForm from './ReviewForm.jsx';

const AddReview = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="addReview" onClick={(e) => props.recordClick(e)}>
      <button className="addReviewButton" onClick={ () => setShow(true) }>Add A Review</button>
      <ReviewForm
        name={props.name}
        productId={props.productId}
        characteristics={props.characteristics}
        show={show}
        onClose={ () => setShow(false) }
        recordClick={(e) => props.recordClick(e)} />
    </div>
  )
}

export default AddReview;