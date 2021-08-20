import React, { useState } from 'react';
import Answer from './Answer.jsx';

const AnswerList = ({ answers }) => {
  const [answerLimit, setAnswerLimit] = useState(2);
  const compare = (answer1, answer2) => {
    return answers[answer2].helpfulness < answers[answer1].helpfulness
      ? answers[answer2].answerer_name === 'Seller'
        ? 1
        : -1
      : 1;
  };

  const answerkeys = Object.keys(answers) ? Object.keys(answers) : [];
  answerkeys.sort(compare);
  console.log(answerkeys);

  const renderedAnswers = answerkeys.slice(0, answerLimit).map((key) => {
    return <Answer key={key} answer={answers[key]} />;
  });

  return (
    <div>
      <div className="answer-list-body">
        <h1 className="answer-tag">A: </h1>
        <div>
          {renderedAnswers}
          {answerkeys.length > 2 ? (
            answerkeys.length > answerLimit ? (
              <button
                className="load-more-answers"
                onClick={() => setAnswerLimit(20000000)}
              >
                See more answers
              </button>
            ) : (
              <button
                className="load-more-answers"
                onClick={() => {
                  setAnswerLimit(2);
                }}
              >
                Collapse answers
              </button>
            )
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default AnswerList;