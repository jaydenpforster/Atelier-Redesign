import React from 'react';

const FactorBar = (props) => {
  let factorValue = (props.value / 5) * 13;
  let leftDescriptor,
    rightDescriptor;

  if (props.name === 'Size') {
    leftDescriptor = 'A size too small';
    rightDescriptor = 'A size too large';
  }

  if (props.name === 'Width') {
    leftDescriptor = 'Too narrow';
    rightDescriptor = 'Too wide'
  }

  if (props.name === 'Comfort') {
    leftDescriptor = 'Uncomfortable';
    rightDescriptor = 'Perfect'
  }

  if (props.name === 'Quality') {
    leftDescriptor = 'Poor';
    rightDescriptor = 'Perfect'
  }

  if (props.name === 'Length') {
    leftDescriptor = 'Runs short';
    rightDescriptor = 'Runs long';
  }

  if (props.name === 'Fit') {
    leftDescriptor = 'Runs tight';
    rightDescriptor = 'Runs loose';
  }

  return (
    <div>
      <div className="factorName">{props.name}</div>
      <div className="factorContainer">
        <div className="factorBar">
          <div className="factorPoint" style={{'marginLeft': `${factorValue}em`}}></div>
          <div className="descriptors">
            <div className="leftDescriptor">{leftDescriptor}</div>
            <div className="rightDescriptor">{rightDescriptor}</div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}

export default FactorBar;