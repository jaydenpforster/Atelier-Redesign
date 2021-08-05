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
    console.log('this.props.sizes', this.props.sizes)
    let sizeNQuantityArr = [];
    for (let obj in this.props.sizes) {
      sizeNQuantityArr.push(this.props.sizes[obj])
    }
    let optionsArr = [];
    for (let i = 0; i < sizeNQuantityArr.length; i++) {
      optionsArr.push(<option key={i} value={`${sizeNQuantityArr[i].size} ${sizeNQuantityArr[i].quantity}`}>{sizeNQuantityArr[i].size}</option>)
    }
    optionsArr.unshift(<option key={100}>none</option>)
    let select = <select
      className="SelectSize"
      onChange={(e) => {
        e.preventDefault()
        this.setState({
          selectedSize: e.target.value.split(' ')[0],
          selectedQuantity: e.target.value.split(' ')[1],
        })
      }}
    >{optionsArr}</select>
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
      let optionsArr = [];
      for (let i = 0; i <= Number(this.state.selectedQuantity); i++) {
        optionsArr.push(<option key={`${i}`} value={i}>{i}</option>)
      }
      return <select
        onChange={e => {
          e.preventDefault()
          this.setState({
            userChosenQuantity: e.target.value
          })
        }}>{optionsArr}</select>
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

