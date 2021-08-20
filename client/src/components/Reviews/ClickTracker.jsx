import React from 'react';
import $ from 'jquery';

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
      console.log('moving into AJAX call')
      $.ajax({
        type: 'POST',
        url: '/reviews/interactions',
        data: {interactions: newInteractions},
        success: () => {
          this.setState({
            interactions: []
          })
        },
        error: (err) => {
          console.log('ERROR in recordClick post!: ', err)
        }
      });
    }
    let element = event.target.className;
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