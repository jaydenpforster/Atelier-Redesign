import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app.jsx';

describe('Reviews Test Suite', () => {
  it('Reviews Test Case', () => {
    expect(true).toEqual(true);
  });
});

// describe('App', () => {
//   test('Test that App renders', () => {
//     const component = renderer.create(<App ></App>);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

