import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RelatedProducts from '../components/relatedProducts/RelatedProducts.jsx';
import ProductCard from '../components/relatedProducts/ProductCard.jsx';
import EachCard from '../components/relatedProducts/EachCard.jsx';
import EachOutfit from '../components/relatedProducts/EachOutfit.jsx';
import Modal from '../components/relatedProducts/Modal.jsx';
import 'regenerator-runtime/runtime';
import { act, render, fireEvent, waitFor, screen } from '@testing-library/react'
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


let relatedProductInfo = {
  info: [
    {
      id: 28212,
      results: [{ photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }] }],
      name: 'Bright Future Sunglasses',
      category: 'accessories',
      description: 'Sweet Sunglasses',
      defaultPrice: '$50.00',
      features: [
        {
          id: 28212,
          results: [{ photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }] }],
          name: 'Bright Future Sunglasses',
          category: 'accessories',
          description: 'Sweet Sunglasses',
          defaultPrice: '$50.00',
          feature: 'Sweet Sunglasses'
        }
      ]
    }
  ]
};

let relatedProductDetailInfo = {
  detailInfo: [
    {
      product_id: '28213',
      results: [
        {
          name: 'Black Lenses & Black Frame',
          original_price: '69.00',
          photos: [
            {
              thumbnail_url: 'url'
            }
          ]
        }
      ]
    }

  ]
}



let cardData = {
  info:
  {
    id: 28212,
    results: [{ photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }] }],
    name: 'Bright Future Sunglasses',
    category: 'accessories',
    description: 'Sweet Sunglasses',
    defaultPrice: '$50.00',
    features: [
      {
        id: 28212,
        results: [{ photos: [{ thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80' }] }],
        name: 'Bright Future Sunglasses',
        category: 'accessories',
        description: 'Sweet Sunglasses',
        defaultPrice: '$50.00',
        feature: 'Sweet Sunglasses'
      }
    ]

  }
};

let renderStars = () => {
  console.log('Star is rendered');
}

it('EachCard component should render', () => {
  act(() => {
    let div = document.createElement('div');
    ReactDOM.render(<EachCard info={cardData.info} renderStars={renderStars} />, div);

    let element = div.querySelector('.eachCard');

    let result = element.querySelector('.category');
    expect(result.innerHTML).toBe('accessories');
  });
});

it('RelatedProducts component should render', () => {
  act(() => {
    let div = document.createElement('div');
    ReactDOM.render(<EachOutfit info={cardData.info} renderStars={renderStars} />, div);

    let element = div.querySelector('.eachOutfit');

    let result = element.querySelector('.category');
    expect(result.innerHTML).toBe('accessories');
  });
});


let show = true;

it('Modal component should render', () => {
  act(() => {
    let div = document.createElement('div');
    ReactDOM.render(<Modal info={cardData.info} overViewProd={cardData.info} show={show} />, div);

    let element = div.querySelector('.modal');

    let result = element.querySelector('.modalName');
    expect(result.innerHTML).toBe('Bright Future Sunglasses');
  });
});

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