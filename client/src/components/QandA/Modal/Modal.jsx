import React from 'react';
import './Modal.css';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1 className="modal-title">{props.title}</h1>
          {props.isQuestionModal ? (
            <h2 className="modal-subtitle">About the {props.productId}</h2>
          ) : (
            <h2 className="modal-subtitle">
              {props.productId}:{props.question_body}
            </h2>
          )}
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;