import React from 'react';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.close}>
      <div className="modalContent" onClick={e => e.stopPropagation()}>
        <div className="modalHeader">
          <h4 className="modalTitle">Comparing</h4>
        </div>
        <table className="modalBody">
          <thead>
            <tr>
              <th>{props.overViewProd.name}</th>
              <th>Feature</th>
              <th className="modalName">{props.info.name}</th>
            </tr>
          </thead>
          <tbody>
            {props.info.features.map((item, i) =>
              <tr key={i + 3}>
                <th key={i}></th>
                <th key={i + 1}>{item.feature}: {item.value}</th>
                <th key={i + 2}>✔️</th>
              </tr>
            )}
            {props.overViewProd.features.map((item, i) =>
              <tr key={i + 3}>
                <th key={i}>✔️</th>
                <th key={i + 1}>{item.feature}: {item.value}</th>
                <th key={i + 2}></th>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
};

export default Modal;