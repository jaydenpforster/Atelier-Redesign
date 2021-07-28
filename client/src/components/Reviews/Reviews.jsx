import React from 'react';
import $ from 'jquery';
import Stars from './Stars.jsx';
import Sort from './Sort.jsx';
// import Filters from './Filters.jsx';
import Factors from './Factors.jsx';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      metaData: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getMetaData = this.getMetaData.bind(this);
  }

  componentDidMount() {
    this.getReviews();
    this.getMetaData();
  }


  getReviews() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:4000/reviews/reviews',
      data: {id: '28212'},
      success: (response) => {
        console.log('getReviews Client response: ', response);
        // this.setState({

        // });
      },
      error: (err) => {
        console.log('Error in getStarRating(): ', err);
      }
    })
  }

  getMetaData() {
    //ajax request to get meta data characteristics
    $.ajax({
      type: 'get',
      url: 'http://localhost:4000/reviews/meta',
      data: {id: '28212'},
      success: (response) => {
        console.log('metaData Client response: ', response)
      },
      error: (err) => {
        console.log('Error in getCharacteristics(): ', err);
      }
    })
  }

  render() {
    return (
      <div>
        <Stars rating={this.state.metaData}/>
        <Sort rating={this.state.metaData} />
        <Factors />
      </div>
    )
  }

}


export default RatingsAndReviews;
