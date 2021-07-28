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
  }

  render() {
    return (
      <div>
        <h4>{this.props.rating} reviews</h4>
        {/*dropdown should go hear with onClick={this.handleClick}*/}
      </div>
    )
  }

}


export default Sort;