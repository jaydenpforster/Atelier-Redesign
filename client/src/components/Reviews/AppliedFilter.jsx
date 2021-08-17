import React from 'react';

const AppliedFilter = (props) => {
  let filterNumber = props.filterNumber;

  return (
    <span className="appliedFilter">
      {filterNumber} Stars<br></br>
    </span>
  )
}

export default AppliedFilter;