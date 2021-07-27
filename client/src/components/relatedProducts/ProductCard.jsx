import React from 'react';
import EachCard from './EachCard.jsx';

const ProductCard = (props) => {


  let combine = props.detailInfo.reduce((map, value) => {
    map[value.product_id] = value;
    return map;
  }, {});
  let newArry = [];
  for (let i = 0; i < props.info.length; i++) {
    let v2 = combine[props.info[i].id]
    if (v2) {
      newArry.push({
        id: v2.product_id,
        results: v2.results,
        category: props.info[i].category,
        description: props.info[i].description,
        defaultPrice: props.info[i].default_price
      })
    }
  }

  console.log('HERE==', newArry)

  return (
    <div className="productCard">
      {newArry.map((each, index) =>
        <EachCard info={each} key={index} />)}
    </div>
  )
}

// class ProductCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       productInfo: [],
//       detailInfo: []
//     }
//   }

//   componentDidMount() {
//     this.setState({
//       productInfo: this.props.info,
//       detailInfo: this.props.detailInfo
//     })
//   }

//   render() {
//     return (
//       <div className="productCard">
//         {console.log('Product Info', this.props.info)}
//         {console.log('Product DEtail Info', this.props.detailInfo)}
//         <div className="img">
//           <img className="cardImg" src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>
//         </div>
//         <div className="cardCategory">Category</div>
//         <div className="expProductName">Expanded product name with extra text</div>
//         <div className="cardPrice">$80.00</div>
//         <div className="cardRating">*****</div>
//       </div>
//     )
//   }
// }

export default ProductCard;