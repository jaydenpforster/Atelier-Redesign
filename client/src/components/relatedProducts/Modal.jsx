import React from 'react';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  let arr1 = props.info.features;
  let arr2 = props.overViewProd.features;
  let both = [];
  let overView = [];
  let related = [];



  // [
  //   {feature: Fabric, value: cotton},
  //   {feature: Cut, value: Loose},
  //   {feature: Something, value: Something else}
  // ]

  // [
  //   {feature: Fabric, value: cotton},
  //   {feature: Cut, value: Loose}
  // ]



  // console.log('BOTH', arr1)


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
              <th>{props.info.name}</th>
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