import React from 'react';

const TwoButtons = (props) => {
  return (
    <div className="twobuttons">
      <button id='More-Answered-Questions' onClick={props.loadQ}>MORE ANSWERED QUESTIONS</button>
      <button id='Add-Question' onClick={props.addQ}>ADD A QUESTION +</button>
    </div>
  );
}

export default TwoButtons;