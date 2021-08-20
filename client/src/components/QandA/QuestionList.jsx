import React, { useEffect, useState } from 'react';
import Question from './Question.jsx';

const QuestionList = ({setShowModal, filteredQuestion, setIsQuestionModal, setQuestionBody, }) => {

  console.log(filteredQuestion);
  const [questionLimit, setQuestionLimit] = useState(2);
  const addLimit = () => {
    setQuestionLimit(questionLimit + 2);
  };

  const addQuestion = () => {
    console.log('I am add question button');
    setShowModal(true);
    setIsQuestionModal(true);
  };

  useEffect(() => {
    setQuestionLimit(2);
  }, [filteredQuestion]);

  const reneredQuestion =
    filteredQuestion != null
      ? filteredQuestion.results.slice(0, questionLimit).map((question) => {
        return (
          <Question
            key={question.question_id}
            setIsQuestionModal={setIsQuestionModal}
            setShowModal={setShowModal}
            question={question}
            setQuestionBody={setQuestionBody}
          />
        );
      })
      : '';
  return (
    <div>
      <div className="question-list">{reneredQuestion}</div>
      <div className="question-list-footer">
        {reneredQuestion ? (
          questionLimit < filteredQuestion.results.length ? (
            <button className="footer-button" onClick={addLimit}>
              MORE ANSWERED QUESTIONS
            </button>
          ) : (
            ''
          )
        ) : (
          ''
        )}
        <button className="footer-button" onClick={addQuestion}>
          ADD A QUESTION +
        </button>
      </div>
    </div>
  );
}

export default QuestionList;