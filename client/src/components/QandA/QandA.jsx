import React from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

class QnA extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionSearch: ''
    }
    this.changeQuestion = this.changeQuestion.bind(this);
  }

  changeQuestion(event) {
    this.setState({
      questionSearch: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault() //prevent entire page refresh

    const data = {
      question: this.state.questionSearch
    }

    // axios.post('', data)
    //   .then(response => console.log(response.data))

    this.setState({
      questionSearch: ''

    })
  }


  render () {
    return (
      <div className='QnA'>
        <div id='QStart'>Questions and Answers</div>
        <div className='form-div'>
          <form onSubmit={this.onSubmit}>
            <input type = 'text'
              placeholder='Full Name'
              onChange={this.changeFullName}
              value={this.state.fullName}
              className='form-control form-group'
            />
            <input type='submit' className='btn btn-danger btn-block' value='Submit'></input>
          </form>
        </div>
      </div>
    )
  }
}

export default QnA;