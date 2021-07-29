/*eslint-env es6*/
/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.jsx';
import Overview from '../components/overview/overview.jsx';


describe('My Test Suite', () => {
  it('My Test Case', () => {
    expect(true).toEqual(true);
  });
});

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


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