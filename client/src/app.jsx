import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      placeHolder: []
    }
  }

  render() {
    return(
      <h1>HELLO!</h1>
      //Tag for overView
      //Tag for q&a
      //Tag for related Products
      //Tag for reviews
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
export default App;