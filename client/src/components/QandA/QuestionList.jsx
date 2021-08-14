import React from 'react';
import Question from './Question.jsx'

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QuestionList">
        <Question />
      </div>
    )
  }
}

export default QuestionList;