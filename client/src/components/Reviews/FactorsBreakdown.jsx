import React from 'react';
import FactorBar from './FactorBar.jsx';

const FactorsBreakdown = (props) => {
  let factorNames = Object.keys(props.characteristics);
  let outerFactorValues = Object.values(props.characteristics);
  let factorValues = [];
  for (let i = 0; i < outerFactorValues.length; i++) {
    factorValues.push(outerFactorValues[i].value)
  }

  const factors = factorNames.map((name, index) =>
    <FactorBar key={`factor-${index}`} name={name} value={factorValues[index]} />
  )

  return (
    <div>
      {factors}
    </div>
  )
}

export default FactorsBreakdown;