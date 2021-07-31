/*eslint-env es6*/
import React from 'react'

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      features: '',
    };
  }

  makeFeatures() {
    let featuresArr = [];
    let i = 0;
    for (let feature of this.props.features) {
      // console.log('feature', feature)
      featuresArr.push(<div key={i} id="feature">{feature.feature} {feature.value}</div>)
      i++;
    }
    return <div id="features">{featuresArr}</div>
  }

  componentDidMount() {
    // console.log('OUR ARRAY', this.props.features)
  }


  render() {
    return (
      <div>
        <div>Features Here</div>
        {this.makeFeatures()}
      </div>
    )
  }
}

export default Features

// <div id="" style="height: 507px; display: block; opacity: 1; visibility: visible; cursor: zoom-in;">
// <img src="path" class="fullScreen" style="margin-top: 10px; margin-left: 173.059px; height: 487px; width: 469.881px;">
// </div>