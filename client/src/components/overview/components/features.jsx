import React from 'react'



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