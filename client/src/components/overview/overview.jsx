import React from 'react'
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
  }

  componentDidMount() {
    this.setState({
      info: this.props.overview,
      styles: this.props.styles
    })
  }

  render() {
    // console.log('this.props.styles', this.props.styles)
    // console.log('this.props.overview', this.props.overview)
    let renderFeatures, renderStyles
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
        {this.props.renderStars()}
        <div className="ProductTitle" >{this.state.info.name}</div>
        <div className="Category">{this.state.info.category}</div>
        {/* <div>OV Price: {this.state.info.default_price}</div> */}
        <div className="Slogan">{this.state.info.slogan}</div>
        <div className="Description">{this.state.info.description}</div>
        <br></br>
        {renderFeatures}
        <br></br>
        {renderStyles}
        <br></br>
      </div>
    );
  }
}
export default Overview;

