import React from 'react'

class SizeAmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenSize: '',
      availableAmount: '-na-',
      chosenAmount: '',
    };
  }

  renderSizes() {
    let sizeAmountArr = [];
    sizeAmountArr.push(<option key="100">Choose a Size</option>)
    let allSkus = this.props.sizes.skus
    let i = 0;
    for (let sku in allSkus) {
      sizeAmountArr.push(
        <option
          key={`${i}`}
          value={`${allSkus[sku].size} ${allSkus[sku].quantity}`}
        >{allSkus[sku].size}</option>
      )
      i++;
    }
    return <select
      onChange={e => {
        this.setState({
          chosenSize: e.target.value.split(' ')[0],
          availableAmount: e.target.value.split(' ')[1]
        })
      }}>{sizeAmountArr}</select>
  }

  renderQuantity() {
    if (this.state.availableAmount === undefined || this.state.availableAmount === '0') {
      return <select><option>OUT OF STOCK</option></select>
    }
    if (this.state.availableAmount === '-na-') {
      return (
        <select
          onClick={e => { alert('Please Choose a Size') }}><option>-na-</option></select>
      )
    }
    let optionsArr = [];
    optionsArr.push(<option key="100">-na-</option>)
    for (let i = 0; i <= Number(this.state.availableAmount); i++) {
      optionsArr.push(
        <option
          key={i}
          value={i} >{i}
        </option>)
    }
    return <select
      onChange={e => {
        this.setState({
          chosenAmount: e.target.value
        })
      }}
    >{optionsArr}</select>
  }

  render() {
    return (
      <div>
        <div>Size Amount</div>
        {this.renderSizes()}
        {this.renderQuantity()}
      </div>
    )
  }
}

export default SizeAmount;