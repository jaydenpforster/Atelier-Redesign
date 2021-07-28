import React from 'react';
import FactorBar from './FactorBar.jsx';
import $ from 'jquery';

class Factors extends React.Component {
  constructor() {
    super();
    this.state = {
      characteristics: []
      //characteristics will be an array of objects
    }
    //binding
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        {/* Each characteristic will be mapped out to FactorBar.jsx*/}
      </div>
    )
  }

}


export default Factors;