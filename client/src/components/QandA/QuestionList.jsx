import React from 'react';
import Question from './Question.jsx'

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QuestionList">
        {/* {this.props.qAndA.data.results.map((inquiry) =>
          <Question key={inquiry.toString()} question={inquiry}/>
        )} */}
        {console.log(this.props.qAndA.data)}
        <Question />
      </div>
    )
  }
}

export default QuestionList;