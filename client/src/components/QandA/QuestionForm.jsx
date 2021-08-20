import React, { useState } from "react";

const QuestionForm = ({ onClose }) => {
  const [question, setQuestion] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(question);
    console.log(nickname);
    console.log(email);
    onClose();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="question"
          id="question-label"
          className="label required"
        >
          Your Question
        </label>
        <textarea
          type="text"
          name="question"
          id="main-input"
          min="1"
          max="1000"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
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
          placeholder="Why did you like the product or not?"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <p>For authentication reasons, you will not be emailed</p>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default QuestionForm;