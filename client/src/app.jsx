import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview/overview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      placeHolder: []
    }
  }

  render() {
    return(
      <div>
        <h1>HELLO!</h1>
        <Overview />
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    )
  }
}


// export default App;
ReactDOM.render(<App />, document.getElementById('app'));