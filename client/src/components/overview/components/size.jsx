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
    let arr = [];
    for (let obj in this.props.sizes) {
      arr.push(this.props.sizes[obj])
    }
    let resultArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      resultArr.push(<option onClick={(e) => {
        e.preventDefault()
        console.log('Option Clicked')
      }} key={i} value={`${arr[i].size} ${arr[i].quantity}`}>{arr[i].size}</option>)
    }
    resultArr.unshift(<option key={100}>none</option>)
    let select = <select
      className="SelectSize"
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
    if (this.state.selectedQuantity === '-n/a-') {
      return <select
        className="SelectQuantity"
        onClick={e => {
          e.preventDefault()
          alert('Please select a Size first')
        }}><option>size needed</option></select>
    } else {
      if (this.state.selectedQuantity === '0' || this.state.selectedQuantity === undefined) {
        return <select><option>OUT OF STOCK</option></select>
      }
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
        }}>{arr}</select>
    }
  }

  render() {
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