import React from 'react';

const FactorBar = (props) => {
  let factorValue = (props.value / 5) * 13;
  let leftDescriptor,
    centerDescriptor,
    rightDescriptor;

  if (props.name === 'Size') {
    leftDescriptor = 'A size too small';
    centerDescriptor = 'Perfect';
    rightDescriptor = 'A size too large';
  }

  if (props.name === 'Width') {
    leftDescriptor = 'Too narrow';
    centerDescriptor = 'Perfect';
    rightDescriptor = 'Too wide'
  }

  if (props.name === 'Comfort') {
    leftDescriptor = 'Uncomfortable';
    centerDescriptor = 'Ok';
    rightDescriptor = 'Perfect'
  }

  if (props.name === 'Quality') {
    leftDescriptor = 'Poor';
    centerDescriptor = 'What I expected';
    rightDescriptor = 'Perfect'
  }

  if (props.name === 'Length') {
    leftDescriptor = 'Runs short';
    centerDescriptor = 'Perfect';
    rightDescriptor = 'Runs long';
  }

  if (props.name === 'Fit') {
    leftDescriptor = 'Runs tight';
    centerDescriptor = 'Perfect';
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
            <div className="centerDescriptor">{centerDescriptor}</div>
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