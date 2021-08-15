/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';
import SearchQuestion from './SearchQuestion.jsx';
import TwoButtons from './TwoButtons.jsx';
import QuestionList from './QuestionList.jsx'



class QnA extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionSearch: '',
    }
    this.changeQuestion = this.changeQuestion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loadQuestions = this.loadQuestions.bind(this);
    this.addQuestion = this.addQuestion.bind(this)
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

    alert('Question search is currently disabled')
    // axios.post('', data)
    //   .then(response => console.log(response.data))

    this.setState({
      questionSearch: ''
    })
  }

  loadQuestions(event) {
    event.preventDefault();
    alert('There are no more questions for this product')
  }

  addQuestion(event) {
    event.preventDefault();
    alert('Please log in to add a question')
  }


  render () {
    return (
      <div className='qnAWrapper'>
        <header className='qHeader'><h3>QUESTIONS & ANSWERS</h3></header>
        <SearchQuestion submit={this.onSubmit} cQuestion={this.changeQuestion} qsearch={this.state.questionSearch}/>
        <QuestionList qAndA ={this.props.qData}/>
        <TwoButtons loadQ={this.loadQuestions} addQ={this.addQuestion} />
      </div>
    )
  }
}

export default QnA;