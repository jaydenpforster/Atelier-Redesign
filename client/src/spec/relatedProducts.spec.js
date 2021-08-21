import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import RelatedProducts from '../components/relatedProducts/RelatedProducts.jsx';
import YourOutfitAdder from '../components/relatedProducts/YourOutfitAdder.jsx';
import ProductCard from '../components/relatedProducts/ProductCard.jsx';
import EachCard from '../components/relatedProducts/EachCard.jsx'

Enzyme.configure({ adapter: new Adapter() });


describe('Related Product Component Tests', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<RelatedProducts />);
    expect(wrapper.find('.relatedProduct')).to.have.lengthOf(1);
  });

  it('renders the ProducCard and YourOutfit components', () => {
    let wrapper = shallow(<RelatedProducts />);
    expect(wrapper.containsMatchingElement(<ProductCard />)).to.equal(true);
    expect(wrapper.containsMatchingElement(<YourOutfitAdder />)).to.equal(true);
  });
});


describe('ProductCard Component Tests', () => {

  it('renders ProductCard Component', () => {
    let info = ['', ''];
    let detail = [{ product_id: '36302', results: ['', ''] }];
    let related = [
      {
        avgRating: { averageRating: 4.4, ratingPercentage: 88 },
        characteristics: {
          Fit: { id: 1, value: 4 },
          Comfort: { id: 1, value: 5 },
          Length: { id: 12610, value: 3 },
          Quality: { id: 312, value: 3 }
        },
        id: 36320,
        ratings: { 1: 1 },
        recommended: { false: 2, true: 8 }
      }]
    let func = () => { };
    let wrapper = shallow(<ProductCard
      info={info}
      detailInfo={detail}
      info3={info}
      info4={info}
      info5={info}
      func1={func}
      relatedRatings={related}
      info7={info}
      func2={func}
      func3={func}
    />);
    expect(wrapper.find('.carousel-container')).to.have.lengthOf(1);
  });

  it('renders the EachCard components', () => {
    let info = ['', ''];
    let detail = [{ product_id: '36302', results: ['', ''] }];
    let related = [
      {
        avgRating: { averageRating: 4.4, ratingPercentage: 88 },
        characteristics: {
          Fit: { id: 1, value: 4 },
          Comfort: { id: 1, value: 5 },
          Length: { id: 12610, value: 3 },
          Quality: { id: 312, value: 3 }
        },
        id: 36320,
        ratings: { 1: 1 },
        recommended: { false: 2, true: 8 }
      }]
    let func = () => { };
    let wrapper = shallow(<ProductCard
      info={info}
      detailInfo={detail}
      info3={info}
      info4={info}
      info5={info}
      func1={func}
      relatedRatings={related}
      info7={info}
      func2={func}
      func3={func}
    />);
    console.log('WRAPPER', wrapper)
    expect(wrapper.containsMatchingElement(<EachCard />)).to.equal(true);
  });


});

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });


// let relatedProductInfo = {
//   info: [
//     {
//       id: 28212,
//       results: [{ photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }] }],
//       name: 'Bright Future Sunglasses',
//       category: 'accessories',
//       description: 'Sweet Sunglasses',
//       defaultPrice: '$50.00',
//       features: [
//         {
//           id: 28212,
//           results: [{ photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }] }],
//           name: 'Bright Future Sunglasses',
//           category: 'accessories',
//           description: 'Sweet Sunglasses',
//           defaultPrice: '$50.00',
//           feature: 'Sweet Sunglasses'
//         }
//       ]
//     }
//   ]
// };

// let relatedProductDetailInfo = {
//   detailInfo: [
//     {
//       product_id: '28213',
//       results: [
//         {
//           name: 'Black Lenses & Black Frame',
//           original_price: '69.00',
//           photos: [
//             {
//               thumbnail_url: 'url'
//             }
//           ]
//         }
//       ]
//     }

//   ]
// }



// let cardData = {
//   info:
//   {
//     id: 28212,
//     results: [{ photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }] }],
//     name: 'Bright Future Sunglasses',
//     category: 'accessories',
//     description: 'Sweet Sunglasses',
//     defaultPrice: '$50.00',
//     features: [
//       {
//         id: 28212,
//         results: [{ photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }] }],
//         name: 'Bright Future Sunglasses',
//         category: 'accessories',
//         description: 'Sweet Sunglasses',
//         defaultPrice: '$50.00',
//         feature: 'Sweet Sunglasses'
//       }
//     ]

//   }
// };

// let renderStars = () => {
//   console.log('Star is rendered');
// }

// it('EachCard component should render', () => {
//   act(() => {
//     let div = document.createElement('div');
//     ReactDOM.render(<EachCard info={cardData.info} renderStars={renderStars} />, div);

//     let element = div.querySelector('.eachCard');

//     let result = element.querySelector('.category');
//     expect(result.innerHTML).toBe('accessories');
//   });
// });

// it('RelatedProducts component should render', () => {
//   act(() => {
//     let div = document.createElement('div');
//     ReactDOM.render(<EachOutfit info={cardData.info} renderStars={renderStars} />, div);

//     let element = div.querySelector('.eachOutfit');

//     let result = element.querySelector('.category');
//     expect(result.innerHTML).toBe('accessories');
//   });
// });


// let show = true;

// it('Modal component should render', () => {
//   act(() => {
//     let div = document.createElement('div');
//     ReactDOM.render(<Modal info={cardData.info} overViewProd={cardData.info} show={show} />, div);

//     let element = div.querySelector('.modal');

//     let result = element.querySelector('.modalName');
//     expect(result.innerHTML).toBe('Bright Future Sunglasses');
//   });
// });

// let next = () {
//   if (0 < (5 - 4)) {
//     setCurrentIndex(0 => 0 + 1)
//   }
// }

// it('ProductCard component should render', () => {
//   act(() => {
//     let div = document.createElement('div');
//     ReactDOM.render(<ProductCard info={relatedProductInfo.info} detailInfo={relatedProductDetailInfo.detailinfo}/>, div);



//     expect(element).toBe(element);
//   });
// });