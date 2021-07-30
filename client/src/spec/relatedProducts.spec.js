import React from 'react';
import renderer from 'react-test-renderer';
import Main from '../components/relatedProducts/Main.jsx';
import ProductCard from '../components/relatedProducts/ProductCard.jsx';
import 'regenerator-runtime/runtime';

describe('RelatedProduct', () => {
  test('Test that Main renders', () => {
    const component = renderer.create(<Main ></Main>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});