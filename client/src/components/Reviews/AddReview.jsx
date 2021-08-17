import React, {useState} from 'react';
import ReviewForm from './ReviewForm.jsx';

const AddReview = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="addReview">
      <button className="addReview" onClick={ () => setShow(true) }>Add A Review</button>
      <ReviewForm
        name={props.name}
        characteristics={props.characteristics}
        show={show}
        onClose={ () => setShow(false) } />
    </div>
  )
}

export default AddReview;