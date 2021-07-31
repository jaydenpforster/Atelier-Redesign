/*eslint-env es6*/
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line func-style */
/*eslint func-style: ["error", "declaration"]*/
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.jsx';
import Overview from '../components/overview/overview.jsx';


// eslint-disable-next-line no-undef
describe('My Test Suite', () => {
  // eslint-disable-next-line no-undef
  test('My Test Case', () => {
    // eslint-disable-next-line no-undef
    expect(true).toEqual(true);
  });
});

// eslint-disable-next-line func-style
function sum(a, b) {
  return a + b;
}

// eslint-disable-next-line no-undef
test('adds 1 + 2 to equal 3', () => {
  // eslint-disable-next-line no-undef
  expect(sum(1, 2)).toBe(3);
});


// eslint-disable-next-line no-undef
describe('App', () => {
  test('Test that App renders', () => {
    const component = renderer.create(<App ></App>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Overview', () => {
  test('Test that Overview renders', () => {
    const component = renderer.create(<Overview ></Overview>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});