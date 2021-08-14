/*eslint-env es6*/
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line func-style */
/*eslint func-style: ["error", "declaration"]*/
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.jsx';
import Overview from '../components/overview/overview.jsx';
// import NewStyles from '../components/overview/newStyles.jsx';

describe('My Test Suite', () => {
  test('My Test Case', () => {
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

  test('Test function on Overview', () => {
    let instance = new Overview()
    expect(instance.jest()).toEqual('Jest')

  })

  test('Test showModal property on Overview', () => {
    let instance = new Overview()
    expect(instance.state.showModal).toEqual(false)
    // expect(instance.state.showWarning).toEqual(false)
  })
  test('Test showWarning property on Overview', () => {
    let instance = new Overview()
    // expect(instance.state.showModal).toEqual(false)
    expect(instance.state.showWarning).toEqual(false)
  })
});

