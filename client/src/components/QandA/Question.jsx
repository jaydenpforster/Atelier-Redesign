import React, { useState } from 'react';
import AnswerList from './AnswerList.jsx';

const Question = ({question, setIsQuestionModal, setShowModal, setQuestionBody, }) => {

  const [taggedHelpful, setTaggedHelpful] = useState(false);

  const addAnswer = (id, question_body) => {
    console.log(`Add answer clicked! ${id}`);
    setShowModal(true);
    setIsQuestionModal(false);
    setQuestionBody(question_body);
  };

  const tagHelpful = (id) => {
    console.log(`Question is tagged helpful ${id}`);
    setTaggedHelpful(true);
  };

  return (
    <div className="question">
      <div className="question-header">
        <h1 className="question-body">Q: {question.question_body}</h1>
        <div className="question-extras">
          <div className="question-helpfulness">
            <label>Helpful? </label>
            <button
              className="add-answer"
              onClick={() => {
                tagHelpful(question.question_id);
              }}
              disabled={taggedHelpful}
            >
              Yes
            </button>
            <label htmlFor="">({question.question_helpfulness})</label>
          </div>
          <button
            className="add-answer"
            onClick={() => {
              addAnswer(question.question_id, question.question_body);
            }}
          >
            Add Answer
          </button>
        </div>
      </div>
      <div className="answer-list">
        <AnswerList answers={question.answers} />
      </div>
    </div>
  );
}

export default Question;