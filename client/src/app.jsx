import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import Main from './components/relatedProducts/Main.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }

  render() {
    return (

      <div>
        <h1></h1>
        {console.log(this.state)}
        <Main />
      </div>

    )
  }
}


// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
