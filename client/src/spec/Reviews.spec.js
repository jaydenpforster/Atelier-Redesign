/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../app.jsx';
import Reviews from '../components/Reviews/Reviews.jsx';
import ReviewTiles from '../components/Reviews/ReviewTiles.jsx';
import 'regenerator-runtime/runtime';
import {act, render, fireEvent, waitFor, screen} from '@testing-library/react'
import { unmountComponentAtNode } from "react-dom";



it('should render ReviewTiles component', () => {
  act(() => {
    let div = document.createElement('div');
    ReactDOM.render(<ReviewTiles />, div);

    let element = div.querySelector('.reviewTiles');
    expect(element.innerHTML).toBe('<strong>!!!Review Tiles Here!!!</strong>');
  });
});


// describe('Reviews Component', () => {
//   test('Test that Reviews Component renders', () => {
//     const component = renderer.create(<Reviews ></Reviews>);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });





