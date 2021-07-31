/*eslint-env es6*/
/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.jsx';
import 'regenerator-runtime/runtime';

// eslint-disable-next-line no-undef
describe('App', () => {
  // eslint-disable-next-line no-undef
  test('Test that App renders', () => {
    const component = renderer.create(<App ></App>);
    let tree = component.toJSON();
    // eslint-disable-next-line no-undef
    expect(tree).toMatchSnapshot();
  });
});


// eslint-disable-next-line no-undef
describe('true is truthy and false is falsy', () => {
  // eslint-disable-next-line no-undef
  test('true is truthy', () => {
    // eslint-disable-next-line no-undef
    expect(true).toBe(true);
  });

  // eslint-disable-next-line no-undef
  test('false is falsy', () => {
    // eslint-disable-next-line no-undef
    expect(false).toBe(false);
  });
});