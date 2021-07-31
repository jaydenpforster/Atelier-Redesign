/*eslint-env es6*/
import React from 'react'


class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyleID: '',
      features: '',
      selectedSize: 'none',
      selectedQuantity: 0,
    };
  }
  renderSizes() {
    // console.log('PROP PASSED', this.props.sizes)
    let arr = [];
    for (let obj in this.props.sizes) {
      arr.push(this.props.sizes[obj])
    }
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
      i++;
      resultArr.push(<option key={i} value={arr[i].size}>{arr[i].size}</option>)
    }
    resultArr.unshift(<option key={0}>none</option>)
    let select = <select
      value={this.state.selectedSize}
      onChange={(e) => {
        e.preventDefault()
        this.setState({selectedSize: e.target.value})
      }}
    >{resultArr}</select>
    return select
  }
  renderQuantity() {
    // let arr = [];
    // console.log('this.props.sizes', this.state.currentStyleID)
    // for (let i = 0; i < this.props.sizes)
    return <div>hi</div>
  }
  setTheState() {
  }

  render() {
    // this.setState({currentStyleID: this.props.sizes[0]})
    this.setTheState()
    return (
      <div>
        <div>Size here!</div>
        {this.renderSizes()}
        {this.renderQuantity()}
      </div>
    )
  }
}
export default Size


/**
 *
     console.log('PROP PASSED', this.props.sizes)
    let arr = [];
    for (let obj in this.props.sizes) {
      arr.push(this.props.sizes[obj])
    }
    console.log('arr', arr)
 */