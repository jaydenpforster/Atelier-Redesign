import React from 'react';

const FormStars = (props) => {
  return (
    <div className="formStars">
      <div className='formStarContainer'>
        <div className='formStarBox' style={{ 'width': `${props.rating}%` }}>
          <div className='formInlineStars'>
            <img className="formStarsLayout" src="star.png" alt="Star" id="20" onClick={props.clickStars.bind(this)} />
            <img className="formStarsLayout" src="star.png" alt="Star" id="40" onClick={props.clickStars.bind(this)} />
            <img className="formStarsLayout" src="star.png" alt="Star" id="60" onClick={props.clickStars.bind(this)} />
            <img className="formStarsLayout" src="star.png" alt="Star" id="80" onClick={props.clickStars.bind(this)} />
            <img className="formStarsLayout" src="star.png" alt="Star" id="100" onClick={props.clickStars.bind(this)} />
          </div>
        </div>
      </div>
      <span className="meaning">{props.meaning}</span>
    </div>
  )
}

export default FormStars;