import React from 'react';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return(
    <div className="modal" onClick={props.close}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <div className="modalHeader">
          <h4 className="modalTitle">Comparing</h4>
        </div>
        <table className="modalBody">
          <thead>
            <tr>
              <th>Overview Product</th>
              <th>Feature</th>
              <th>Related Product</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Checkmark 1</td>
              {props.info.features.map((item, i) =>
                <td key={i}>{item.feature}: {item.value}</td>)}
              <td>checkmark 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Modal;