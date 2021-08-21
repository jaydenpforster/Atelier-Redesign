import React, { useState } from 'react';
import moment from 'moment';

const Answer = ({ answer }) => {
  const [reported, setReported] = useState(false);
  const [helpful, setHelpful] = useState(false);

  const reportAnswer = (id) => {
    console.log(`Answer id ${id} reported`);
    setReported(true);
  };
  const tagAnswerHelpful = (id) => {
    console.log(`Answer id ${id} is tagged helpful`);


    let helpfulCount = document.getElementById('aHelp').innerHTML
    console.log(typeof helpfulCount, helpfulCount)

    helpfulCount = Number(helpfulCount.replace(/[^\d.-]/g, ''));

    console.log(typeof helpfulCount, helpfulCount)

    helpfulCount++;
    console.log(helpfulCount)
    document.getElementById('aHelp').innerHTML = helpfulCount.toString();
    console.log(helpfulCount)

    setHelpful(true);
  };
  const renderedPhotos = answer.photos
    ? answer.photos.map((photo) => {
      return <img key={photo} src={photo} className="answer-photo" alt="" />;
    })
    : [];

  return (
    <div className="answer">
      <div className="answer-body">
        <p>{answer.body}</p>
        {answer.photos ? (
          <div className="answer-photos">{renderedPhotos}</div>
        ) : (
          ''
        )}
      </div>
      <div className="answer-footer">
        <div className="answer-footer-label user">
          <label>by {answer.answerer_name},</label>
          <label>&nbsp; {moment(answer.date).format('MMM D, YYYY')} </label>
        </div>
        <div className="answer-footer-label helpful">
          <label>Helpful? </label>
          <button
            className="add-answer"
            onClick={() => {
              tagAnswerHelpful(answer.id);
            }}
            disabled={helpful}
          >
            Yes
          </button>
          <label id="aHelp">({answer.helpfulness})</label>
        </div>
        <div className="answer-footer-label report">
          {!reported ? (
            <button
              className="report-btn"
              onClick={() => {
                reportAnswer(answer.id);
              }}
            >
              Report
            </button>
          ) : (
            <label className="reported">Reported</label>
          )}
        </div>
      </div>
    </div>
  );
}

export default Answer;