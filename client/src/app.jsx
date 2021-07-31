'use strict';
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import Overview from './components/overview/overview.jsx';
import Main from './components/relatedProducts/Main.jsx';
import QnA from './components/QandA/QandA.jsx';
import Reviews from './components/Reviews/Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // productId: 'GET /products/:product_id',
      // starRating: '',
      // reviews: 'GET /reviews/
      // metaData: 'GET /reviews/meta',
      // cart: 'GET /cart
      // styles: 'GET /products/:product_id/styles',
      // relatedProducts: 'GET /products/:product_id/related',
      hovered: false

    }

    //bind
  }

  //GET REQUESTS

  //Overview
    //productId
    //style
    //stars
    //cart

  //Related Products / Main
    //productId
    //style
    //stars

  //QandA
    //...

  //Revies
    //productId
    //stars / reviews
    //metadata

  render() {
    return (

      <div>
        {/* {console.log(this.state)} */}
        <h1></h1>
        <Overview />
        <br></br>
        <Main />
        <br></br>
        <QnA />
        <br></br>
        <Reviews />
      </div>

    )
  }
}


// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
