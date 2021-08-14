import React from 'react';

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="QuestionList">
        <div className="Questions">
          <li>QUESTION SHOULD GO HERE</li>
          <div className="Answers">
            <ul>ANSWERS TO THE QUESTION HERE</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default QuestionList;