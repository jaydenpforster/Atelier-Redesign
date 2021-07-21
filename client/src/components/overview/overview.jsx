import React from 'react';
import axios from 'axios';


class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <div>
        <div>Overview Here!</div>
        <div className="wrapper">
  <h1>Standalone SVG CSS-only Star Rating Component</h1>

  <div className="rating-holder">
    <div className="c-rating c-rating--small" data-rating-value="2">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  </div>

  <div className="rating-holder">
    <div className="c-rating c-rating--regular" data-rating-value="3.25">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  </div>

  <div className="rating-holder">
    <div className="c-rating c-rating--big" data-rating-value="4.5">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
    </div>
  </div>
</div>
      </div>
    );
  }
}
export default Overview;