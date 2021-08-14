import React from 'react';
import Question from './Question.jsx'

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QuestionList">
        {this.props.qAndA.map((inquiry, index) =>
          <Question key={index} question={inquiry.question_body} answer={inquiry.answers}/>
        )}
      </div>
    )
  }
}

export default QuestionList;