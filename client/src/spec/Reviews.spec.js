/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.jsx';
import Reviews from '../components/Reviews/Reviews.jsx';

describe('Reviews Component', () => {
  test('Test that Reviews Component renders', () => {
    const component = renderer.create(<Reviews ></Reviews>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});





