/*eslint-env es6*/
/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.jsx';
import 'regenerator-runtime/runtime';

describe('App', () => {
  test('Test that App renders', () => {
    const component = renderer.create(<App ></App>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});


describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });

  test('false is falsy', () => {
    expect(false).toBe(false);
  });
});