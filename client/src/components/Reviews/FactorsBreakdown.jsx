import React from 'react';
import FactorBar from './FactorBar.jsx';

const FactorsBreakdown = (props) => {
  let factorNames = Object.keys(props.characteristics);
  let factorValues = Object.values(props.characteristics);

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