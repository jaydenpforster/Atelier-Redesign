/*eslint-env es6*/
import React from 'react'


class Size extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyleID: '',
      features: '',
      selectedSize: 'none',
      selectedQuantity: '-n/a-',
      userChosenQuantity: '',
    };
  }
  renderSizes() {
    // console.log('PROP PASSED', this.props.sizes)
    let arr = [];
    for (let obj in this.props.sizes) {
      arr.push(this.props.sizes[obj])
    }
    let resultArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      // console.log('arr[i]', arr[i])
      resultArr.push(<option onClick={(e) => {
        e.preventDefault()
        console.log('Option Clicked')
      }} key={i} value={`${arr[i].size} ${arr[i].quantity}`}>{arr[i].size}</option>)
    }
    resultArr.unshift(<option key={100}>none</option>)
    let select = <select
      // value={this.state.selectedSize}
      onChange={(e) => {
        e.preventDefault()
        this.setState({
          selectedSize: e.target.value.split(' ')[0],
          selectedQuantity: e.target.value.split(' ')[1],
        })
        console.log('this.state', this.state)
      }}
    >{resultArr}</select>
    return select
  }
  renderQuantity() {
    // Loop
    // Make a option for every number
    if (this.state.selectedQuantity === '-n/a-') {
      return <select onClick={e => {
        e.preventDefault()
        alert('Please select a Size first')
      }}><option>size needed</option></select>
    } else {
      let arr = [];
      for (let i = 0; i <= Number(this.state.selectedQuantity); i++) {
        arr.push(<option key={i} value={i}>{i}</option>)
      }
      return <select
        onChange={e => {
          e.preventDefault()
          this.setState({
            userChosenQuantity: e.target.value
          })
          console.log('this.state', this.state)
        }}>{arr}</select>
    }
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