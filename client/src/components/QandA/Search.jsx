import React, { useState, useEffect } from 'react';

const filterQuestion = (questions, searchText) => {
  const newQuestionSet = { product_id: questions.product_id, results: [] };
  if (questions.length > 0) {
    for (const key in questions.results) {
      if (
        questions.results[key].question_body
          .toLowerCase()
          .includes(searchText.toLowerCase()) // for case insensitive search
      ) {
        newQuestionSet.results.push(questions.results[key]);
      }
    }
  }
  return newQuestionSet;
};

const Search = ({ questions, setFilteredQuestion }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText.length > 2) {
      setFilteredQuestion(filterQuestion(questions, searchText));
    } else {
      setFilteredQuestion(questions);
    }
  }, [searchText, questions, setFilteredQuestion]);

  return (
    <div>
      <h2 className="search-heading">QUESTIONS & ANSWERS</h2>
      <input
        className="search-input"
        type="text"
        value={searchText}
        onChange={(ev) => setSearchText(ev.target.value)}
        placeholder="Have a question? Search for answers..."
      />
      <i className="fa fa-search icon-search" />
    </div>
  );
}

export default Search;