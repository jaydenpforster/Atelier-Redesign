import React from 'react';

class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    //helpful
    //newest
    //relevance DEFAULT (combo of helpful and newest)
    // perhaps send the get request from Reviews.jsx with the sortOption
      //this.props.getReviews
  }

  render() {
    return (
      <div>
        {/*dropdown should go here with onClick={this.handleClick}*/}
      </div>
    )
  }

}


export default Sort;