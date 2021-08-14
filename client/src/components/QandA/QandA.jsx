import React from 'react';
import axios from 'axios';
import SearchQuestion from './SearchQuestion.jsx';
import TwoButtons from './TwoButtons.jsx';
import QuestionList from './QuestionList.jsx'

// import 'bootstrap/dist/css/bootstrap.min.css';

class QnA extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionSearch: '',
    }
    this.changeQuestion = this.changeQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
        <div id='QStart'>QUESTIONS & ANSWERS</div>
        <SearchQuestion submit={this.onSubmit} cQuestion={this.changeQuestion} qsearch={this.state.questionSearch}/>
        <QuestionList qAndA ={this.props.qData}/>
        <TwoButtons />
      </div>
    )
  }
}

export default QnA;