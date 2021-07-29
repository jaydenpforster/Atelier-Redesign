import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import Main from './components/relatedProducts/Main.jsx';
<<<<<<< HEAD
import Overview from './components/overview/overview.jsx';
import $ from 'jquery';
=======
// import $ from 'jquery';
import RatingsAndReviews from './components/Reviews/Reviews.jsx';
>>>>>>> 6115ae46967e5ad1adf303c873410a7b63c6625f

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }

  render() {
    return (

      <div>
        <h1></h1>
        {console.log(this.state)}
        <Main />
        <br>
        </br>
        <RatingsAndReviews />
      </div>

    )
  }
}


// ReactDOM.render(<App />, document.getElementById('app'));
export default App;
