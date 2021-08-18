/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';

import { shallow } from 'enzyme';
import { expect } from 'chai';

import QnA from '../components/QandA/QandA.jsx';
import QuestionList from '../components/QandA/QuestionList.jsx';
import SearchQuestion from '../components/QandA/SearchQuestion.jsx';
import TwoButtons from '../components/QandA/TwoButtons.jsx'

Enzyme.configure({ adapter: new Adapter() });

describe('QandA Component Tests', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<QnA />);
    expect(wrapper.find('.qnAWrapper')).to.have.lengthOf(1);
  });

  it('renders a header "qHeader"', () => {
    let wrapper = shallow(<QnA />);
    expect(wrapper.find('.qHeader')).to.have.lengthOf(1);
  });

  it('renders the SearchQuestion, QuestionList, and TwoButtons component', () => {
    let wrapper = shallow(<QnA />);
    expect(wrapper.contains(<QuestionList />)).to.equal(true);
    expect(wrapper.containsMatchingElement(<SearchQuestion />)).to.equal(true);
    expect(wrapper.containsMatchingElement(<TwoButtons />)).to.equal(true);
  });

});

describe('QuestionList Component Test', () => {

  it('contains 1 "questionList" div', () => {

    let data = [' ', ' ']
    let wrapper = shallow(<QuestionList qAndA={data}/>);

    expect(wrapper.find('.questionList')).to.have.lengthOf(1);
  });

});

