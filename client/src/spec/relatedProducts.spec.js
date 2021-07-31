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

let CardData = {info:
  {
    id: 28212,
    name: 'Bright Future Sunglasses',
    category: 'accessories',
    description: 'Sweet Sunglasses',
    defaultPrice: '$50.00'
  }
}

it('should render', () => {
  act(() => {
    let div = document.createElement('div');
    ReactDOM.render(<EachCard info={CardData.info}/>, div);

    let element = div.querySelector('.eachCard');

    let result = element.querySelector('.category');
    expect(result.innerHTML).toBe('accessories');
  });
});