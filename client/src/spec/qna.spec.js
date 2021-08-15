/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { expect } from 'chai';

import QnA from '../components/QandA/QandA.jsx';
import QuestionList from '../components/QandA/QuestionList.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('QnA Component Tests', () => {
  // it('It test the QnA component', () => {
  //   const wrapper = shallow(QnA);
  //   expect(wrapper.find('.qnAWrapper')).to.have.lengthOf(3);
  // });
  function Bar() {
    return (
      <div>
        <div className="in-bar" />
      </div>
    );
  }

  function Foo() {
    return (
      <div>
        <Bar />
      </div>
    );
  }

  it('test from docs', ()=> {
    const wrapper = shallow(<Foo />);
    expect(wrapper.find('.in-bar')).to.have.lengthOf(0);
    expect(wrapper.find(Bar)).to.have.lengthOf(1);
    expect(wrapper.find(Bar).shallow().find('.in-bar')).to.have.lengthOf(1);
  })


});

