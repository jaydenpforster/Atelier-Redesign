import React from 'react';

const FactorBar = (props) => {
  let factorValue = (props.value / 5) * 13;
  let leftDescriptor,
    centerDescriptor,
    rightDescriptor;

  if (props.name === 'Size') {
    leftDescriptor = 'Too small';
    centerDescriptor = 'Perfect';
    rightDescriptor = 'Too large';
  }

  if (props.name === 'Width') {
    leftDescriptor = 'Too Narrow';
    centerDescriptor = 'Perfect';
    rightDescriptor = 'Too Wide'
  }

  if (props.name === 'Comfort') {
    leftDescriptor = 'Uncomfortable';
    centerDescriptor = 'Ok';
    rightDescriptor = 'Perfect'
  }

  if (props.name === 'Quality') {
    leftDescriptor = 'Poor';
    centerDescriptor = 'What I Expected';
    rightDescriptor = 'Perfect'
  }

  if (props.name === 'Length') {
    leftDescriptor = 'Runs Tight';
    centerDescriptor = 'Perfect';
    rightDescriptor = 'Runs Long';
  }

  if (props.name === 'Fit') {
    leftDescriptor = 'Tight';
    centerDescriptor = 'Perfect';
    rightDescriptor = 'Loose';
  }

  return (
    <div>
      <div className="factorName">{props.name}</div>
      <div className="factorContainer">
        <div className="factorBar">
          <div className="factorBreakLeft"></div>
          <div className="factorBreakRight"></div>
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
