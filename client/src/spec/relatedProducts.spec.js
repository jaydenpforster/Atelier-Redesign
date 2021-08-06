import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Main from '../components/relatedProducts/Main.jsx';
import ProductCard from '../components/relatedProducts/ProductCard.jsx';
import EachCard from '../components/relatedProducts/EachCard.jsx'
import 'regenerator-runtime/runtime';
import {act, render, fireEvent, waitFor, screen} from '@testing-library/react'
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



let cardData = {info:
  {
    id: 28212,
    results: [{photos: [{thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'}]}],
    name: 'Bright Future Sunglasses',
    category: 'accessories',
    description: 'Sweet Sunglasses',
    defaultPrice: '$50.00'
  }
}

it('should render', () => {
  act(() => {
    let div = document.createElement('div');
    ReactDOM.render(<EachCard info={cardData.info}/>, div);

    let element = div.querySelector('.eachCard');

    let result = element.querySelector('.category');
    expect(result.innerHTML).toBe('accessories');
  });
});