import React from 'react';

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bind
  }

  render() {
    return (
      <img src={this.props.src} width='10%' height='10%'></img>
    )
  }
}

export default Images