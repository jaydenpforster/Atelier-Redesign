import React, { useState } from 'react';

const AnswerForm = ({ onClose }) => {
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [pictures, setPictures] = useState([]);
  const MAX_LENGTH = 5;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Answers >>', answer);
    console.log('Name >>', nickname);
    console.log('Email >>', email);
    console.log('Pictures >>', pictures);

    onClose();
  };

  const handleImageUpload = (e) => {
    if (Array.from(e.target.files).length > MAX_LENGTH) {
      e.preventDefault();
      alert(`Cannot upload files more than ${MAX_LENGTH}`);
    }
    const tempArr = [];

    [...e.target.files].slice(0, MAX_LENGTH).forEach((file) => {
      console.log('file >>> ', file);

      tempArr.push({
        data: file,
        url: URL.createObjectURL(file),
      });
    });

    setPictures(tempArr);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Answer" className="label required">
          Your Answer
        </label>
        <textarea
          name="Answer"
          id="main-input"
          min="1"
          max="1000"
          value={answer}
          required
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <label htmlFor="nickname" id="nickname" className="label required">
          What is your nickname
        </label>
        <input
          type="text"
          name="nickname"
          id="name-input"
          required
          placeholder="Example: jackson11!"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <label htmlFor="email" id="email" className="label required">
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email-input"
          value={email}
          placeholder="Example: jack@email.com"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>For authentication reasons, you will not be emailed</p>
        <label htmlFor="photos" id="photos" className="label">
          Upload Your Photos
        </label>
        <input
          type="file"
          name="photos"
          multiple
          id=""
          onChange={handleImageUpload}
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AnswerForm;