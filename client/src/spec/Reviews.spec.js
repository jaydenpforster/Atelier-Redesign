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


const Thumbnail = (props) => {
  let thumbnailArr = [];
  for (let i = 0; i < this.props.pics.length; i++) {
    thumbnailArr.push(<img alt="thumbnail" src={this.props.pics[i].thumbnail_url}></img>)
  }
  return (
    <div>
      <div>Thumbnail here!</div>
      {thumbnailArr};
    </div>
  )
}