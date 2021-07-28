import React from 'react';
import FilterBar from './FilterBar.jsx';


class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      percentage: 0
    }
    //binding
  }

  //ajax request to get array of reviews and percentage recommended
    //send to 'http://localhost:4000/reviews/reviews',


  render() {
    return(
      <div>
        {/* {send reviews data to be mapped to BreakdowBars} */}
        {/* product breakdown form will go here */}

        {/* The percentage of reviews that ‘recommend’
        the product will be displayed below the breakdown. */}
      </div>
    )
  }


}

export default Filters;