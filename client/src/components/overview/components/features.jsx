import React from 'react'

// class Features extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       features: '',
//     };
//   }

//   makeFeatures() {

//     let featuresArr = [];
//     let i = 0;
//     for (let feature of this.props.features) {
//       featuresArr.push(<div key={i} id="feature">{feature.feature} {feature.value}</div>)
//       i++;
//     }
//     return <div id="Features">{featuresArr}</div>
//   }

//   render() {

//     console.log('features', this.props.features)
//     return (
//       <div className="features">
//         {this.makeFeatures()}
//       <div/>
//     )
//   }
// }

// export default Features


let Features = (props) => {
  if (props.features === undefined) {
    return <div></div>
  }
  let featuresArr = [];
  let i = 0;
  for (let feature of props.features) {
    featuresArr.push(<div key={i} id="smallFeature">{feature.feature}: {feature.value}</div>)
    i++;
  }
  return (
    <div
      id="allFeatures"
    >
      {featuresArr}
    </div>
  )


}

export default Features