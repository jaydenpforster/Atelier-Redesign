/*eslint-env es6*/
import React from 'react'
import axios from 'axios'
import Features from './components/features.jsx'
import Styles from './components/styles.jsx'

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      info: '',
      styles: '',
    };
    this.updateState = this.updateState.bind(this)
  }
  updateState() {
    this.setState({
      info: this.props.overview,
      styles: this.props.styles
    })
  }
  componentDidMount() {
    this.updateState()
  }

  render() {
    // console.log('this.props.styles', this.props.styles)
    // console.log('this.props.overview', this.props.overview)
    let renderFeatures, renderStyles
    // let renderStyles;
    if (this.state.info !== '') {
      renderFeatures = <Features features={this.state.info.features} />
      renderStyles = <Styles styles={this.state.styles.results} />
    } else {
      renderFeatures = <div></div>
      renderStyles = <div></div>
    }
    return (
      <div className="Overview" data-testid="Overview">
        <div>Overview Here!</div>
        <div>{this.state.info.name}</div>
        <div>{this.state.info.category}</div>
        <div>OV Price: {this.state.info.default_price}</div>
        <div>{this.state.info.slogan}</div>
        <div>{this.state.info.description}</div>
        <br></br><br></br><br></br>
        {renderFeatures}
        <br></br><br></br><br></br>
        {renderStyles}
        <br></br><br></br><br></br>

      </div>
    );
  }
}
export default Overview;

