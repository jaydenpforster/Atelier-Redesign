import React from 'react';

const FactorBar = (props) => {
  let factorValue = (props.value / 5) * 13;
  let leftDescriptor;
  let middleDescriptor;
  let rightDescriptor;

  if (props.name === 'Size') {
    leftDescriptor = 'Too small';
    middleDescriptor = 'Perfect';
    rightDescriptor = 'Too large';
  }

  if (props.name === 'Width') {
    leftDescriptor = 'Narrow';
    middleDescriptor = 'Perfect';
    rightDescriptor = 'Wide'
  }

  if (props.name === 'Comfort' || props.name === 'Quality') {
    leftDescriptor = 'Poor';
    rightDescriptor = 'Great'
  }

  if (props.name === 'Length') {
    leftDescriptor = 'Too Short';
    middleDescriptor = 'Perfect';
    rightDescriptor = 'Too Long';
  }

  if (props.name === 'Fit') {
    leftDescriptor = 'Tight';
    rightDescriptor = 'Loose';
  }



  return (
    <div>
      <div className="factorName">{props.name}</div>
      {/* Each characteristic will be mapped out with the title, bar, and range. ex:
        Size
        {/* bar here with token
        Too small - Perfect - Too Large */}
      <div className="factorContainer">
        <div className="factorBar">
          <div className="factorBreakLeft"></div>
          <div className="factorBreakRight"></div>
          <div className="factorPoint" style={{'marginLeft': `${factorValue}em`}}></div>
          <div className="descriptors">
            <div>{leftDescriptor}</div>
            <div>{middleDescriptor}</div>
            <div>{rightDescriptor}</div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}


export default FactorBar;