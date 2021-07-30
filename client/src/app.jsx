import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Overview from './components/overview/overview.jsx';
import Main from './components/relatedProducts/Main.jsx';
// import QandA from './components/QandA/QandA.jsx';
import RatingsAndReviews from './components/Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      starRating: '',
      hovered: false
    }

    //bind
  }

  //GET REQUESTS

  //Overview
    //productId
    //style
    //stars

  //Related Products / Main
    //productId
    //style
    //stars

  //QandA
    //...

  //Revies
    //productId
    //stars

  render() {
    return (

      <div>
        {console.log(this.state)}
        <h1></h1>
        <Overview />
        <br></br>
        <Main />
        <br></br>
        <QandA />
        <br></br>
        <RatingsAndReviews />
      </div>

    )
  }
}


// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
