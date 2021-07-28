import React from 'react';
import BreakdownBars from './BreakdownBars.jsx';


class Breakdown extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    }
    //binding
  }

  //ajax request to get array of reviews
    //send to 'http://localhost:4000/reviews/reviews',

  //handleClick
    //will display reviews of that many stars when clicked
      //additive
      //toggles

  render() {
    return(
      <div>
        {/* {send reviews data to be mapped to BreakdowBars} */}
        {/* product breakdown form will go here */}
        {/* must have onClick handler for 5star, 4star, 3star, 2star, 1star */}
      </div>
    )
  }


}

export default Breakdown;