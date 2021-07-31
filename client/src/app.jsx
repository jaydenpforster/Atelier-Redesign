'use strict';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import Main from './components/relatedProducts/Main.jsx';
// import $ from 'jquery';
// eslint-disable-next-line no-unused-vars
import RatingsAndReviews from './components/Reviews/Reviews.jsx';
import Overview from './components/overview/overview.jsx';

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
        <Overview />
        {/* {console.log(this.state)} */}
        {/* <Main /> */}
        <br>
        </br>
        {/* <RatingsAndReviews /> */}
      </div>

    )
  }
}


// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
