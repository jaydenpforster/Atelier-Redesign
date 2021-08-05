import React from 'react';
import FactorBar from './FactorBar.jsx';
import $ from 'jquery';

class FactorsBreakdown extends React.Component {
  constructor() {
    super();
    this.state = {
    }
    //binding
  }

  render() {
    let factorNames = Object.keys(this.props.characteristics);
    let factorValues = Object.values(this.props.characteristics);

    const factors = factorNames.map((name, index) =>
      <FactorBar key={index} name={name} value={factorValues[index]} />
    )

    return (
      <div>
        {factors}
      </div>
    )
  }
}




export default FactorsBreakdown;