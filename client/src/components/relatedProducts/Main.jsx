import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: []
    }
  }

  render() {
    return(
      <div>
        <h1>MAIN</h1>
      </div>
    )
  }
}

export default Main;