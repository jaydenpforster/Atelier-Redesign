import React from 'react';

const SearchQuestion = (props) => {
  return (
    <div className='form-div'>
      <form onSubmit={props.submit}>
        <input type = 'text'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          onChange={props.cQuestion}
          value={props.qSearch}
          className='form-control form-group'
        />
        <input type='submit' className='btn btn-danger btn-block' value='Submit'></input>
      </form>
    </div>
  );
}

export default SearchQuestion;