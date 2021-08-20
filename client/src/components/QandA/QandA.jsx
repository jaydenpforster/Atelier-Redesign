/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import QuestionList from './QuestionList.jsx';
import Modal from './Modal/Modaljsx';
import "./App.css";
import QuestionForm from './QuestionForm.jsx';
import AnswerForm from './AnswerForm.jsx';


const compare = (question1, question2) => {
  return question2.question_helpfulness - question1.question_helpfulness;
};

const QnA = (props) => {

  const [questions, setQuestions] = useState(null);
  const [questionBody, setQuestionBody] = useState('');
  const [filteredQuestion, setFilteredQuestion] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isQuestionModal, setIsQuestionModal] = useState(true);

  useEffect(() => {
    (props.qData) => {
      if (data.results.length > 1) {
        data.results.sort(compare);
      }
      setQuestions(data);
    };
  }, []);

  return (
    <div className="QnA">
      {questions && questions.results && questions.results.length > 0 ? (
        <div className="question-answer">
          <div className="questions-search">
            <Search
              questions={questions}
              setFilteredQuestion={setFilteredQuestion}
            />
          </div>
          <div>
            <QuestionList
              setShowModal={setShowModal}
              filteredQuestion={filteredQuestion}
              setQuestionBody={setQuestionBody}
              setIsQuestionModal={setIsQuestionModal}
            />
          </div>
          <Modal
            title={isQuestionModal ? 'Ask Your Question' : 'Submit Your Answer'}
            productId={questions.product_id}
            show={showModal}
            isQuestionModal={isQuestionModal}
            question_body={questionBody}
            onClose={() => {
              setShowModal(false);
            }}
          >
            {isQuestionModal ? (
              <QuestionForm
                onClose={() => {
                  setShowModal(false);
                }}
              />
            ) : (
              <AnswerForm
                onClose={() => {
                  setShowModal(false);
                }}
              />
            )}
          </Modal>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}


export default QnA;