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
// import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // starRating: '',
      // reviews: 'GET /reviews/
      // metaData: 'GET /reviews/meta',
      // cart: 'GET /cart
      overview: '',
      styles: '',
      related: '',
      mainProductID: '28212',
      relatedProductIDs: '',
    }
    //bind
    this.getAllProductInfo = this.getAllProductInfo.bind(this)
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


  getAllProductInfo(id) {
    $.ajax({
      url: 'http://localhost:4000/getAllProductInfo',
      type: 'GET',
      data: { id },
      success: (data) => {
        // console.log('Success', data);
        this.setState({
          overview: data[0],
          styles: data[1],
          related: data[2],
          mainProductID: data[1].product_id,
          relatedProductIDs: data[3]
        })
      },
      error: (data) => {
        console.log('Error', data);
      }
    });
  }

  componentDidMount() {
    this.getAllProductInfo('28212')
  }

  render() {
    let overview;
    if (this.state.overview.id === undefined) {
      overview = <></>
    } else {
      overview = <Overview overview={this.state.overview} styles={this.state.styles} />
    }
    return (
      <div>
        <h1></h1>
        {overview}
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
