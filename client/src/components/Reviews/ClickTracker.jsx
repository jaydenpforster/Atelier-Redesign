import React from 'react';
import axios from 'axios'
import config from '../../../../config.js'

class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interactions: []
    }
    this.recordClick = this.recordClick.bind(this)
  }

  recordClick(event) {
    let newInteractions = this.state.interactions.slice();
    if (newInteractions.length > 5) {
      for (let i = 0; i < newInteractions.length; i++) {
        axios({
          method: 'POST',
          url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions',
          data: newInteractions[i],
          headers: {
            'Authorization': config.TOKEN
          }
        })
          .then((data) => {
            this.setState({
              interactions: []
            })
          })
          .catch((err) => {
            console.log('ERROR in recordClick: ', err)
          })
      }
    }
    let element = event.target.className;
    if (element === '') {
      element = 'ratingsAndReviewsWidget'
    }
    console.log('ELEMENT: ', element)
    let isRecorded = {
      element: element,
      widget: 'Reviews Widget',
      time: new Date(Date.now(event.target.timeStamp))
    }
    newInteractions.push(isRecorded);
    this.setState({
      interactions: newInteractions
    });
  }

  render() {
    let renderProps = {
      recordClick: this.recordClick
    }
    if (typeof this.props.children === 'function') {
      return this.props.children(renderProps);
    } else {
      return this.props.children
    }
  }
}

export default ClickTracker;