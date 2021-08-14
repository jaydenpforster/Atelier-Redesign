import React from 'react'
import Answer from './Answer.jsx'

const Question = (props) => {
  return (
    <div className="Questions">
      Q: {props.question}
      {Object.keys(props.answer).map((keyNames, index) =>
        <Answer answerbody={props.answer[keyNames].body} key={index}/>
      )}
    </div>
  )
}
export default Question;