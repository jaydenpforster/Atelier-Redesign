import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Reviews from '../components/Reviews/Reviews.jsx';
import ClickTracker from '../components/Reviews/ClickTracker.jsx';
import Stars from '../components/Reviews/Stars.jsx';
import RatingBreakdown from '../components/Reviews/RatingBreakdown.jsx';
import FactorsBreakdown from '../components/Reviews/FactorsBreakdown.jsx';
import Sort from '../components/Reviews/Sort.jsx';
import AppliedFilter from '../components/Reviews/AppliedFilter.jsx';
import FactorBar from '../components/Reviews/FactorBar.jsx';
import ReviewTiles from '../components/Reviews/ReviewTiles.jsx';
import SingleTile from '../components/Reviews/SingleTile.jsx';
import Images from '../components/Reviews/Images.jsx';
import ReviewImgModal from '../components/Reviews/ReviewImgModal.jsx';
import AddReview from '../components/Reviews/AddReview.jsx';
import ReviewForm from '../components/Reviews/ReviewForm.jsx';
import FormCharacteristic from '../components/Reviews/FormCharacteristic.jsx';
import FormStars from '../components/Reviews/FormStars.jsx';

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<Reviews />);
    expect(wrapper.find('.reviews')).to.have.lengthOf(1);
  });

  it('renders the ClickTracker component', () => {
    let wrapper = mount(<Reviews />);
    expect(wrapper.containsMatchingElement(<ClickTracker />)).to.equal(true);
  });

  it('renders the Stars component', () => {
    let wrapper = shallow(<Reviews />);
    expect(wrapper.containsMatchingElement(<Stars />)).to.equal(true);
  });

  it('renders the RatingBreakdown component', () => {
    let wrapper = shallow(<Reviews />);
    expect(wrapper.containsMatchingElement(<RatingBreakdown />)).to.equal(true);
  });

  it('renders the FactorsBreakdown component', () => {
    let wrapper = shallow(<Reviews />);
    expect(wrapper.containsMatchingElement(<FactorsBreakdown />)).to.equal(true);
  });

  it('renders the Sort component', () => {
    let wrapper = shallow(<Reviews />);
    expect(wrapper.containsMatchingElement(<Sort />)).to.equal(true);
  });

});


describe('Stars', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<Stars />);
    expect(wrapper.find('.starsInReviews')).to.have.lengthOf(1);
  });

});


describe('RatingBreakdown', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<RatingBreakdown />);
    expect(wrapper.find('.ratingBreakdownFull')).to.have.lengthOf(1);
  });

  it('renders the AppliedFilter component', () => {
    let wrapper = shallow(<RatingBreakdown />);
    expect(wrapper.containsMatchingElement(<AppliedFilter />)).to.equal(true);
  });

});


describe('AppliedFilter', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<AppliedFilter />);
    expect(wrapper.find('.appliedFilter')).to.have.lengthOf(1);
  });

});


describe('FactorsBreakdown', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<FactorsBreakdown />);
    expect(wrapper.find('.factorsBreakdown')).to.have.lengthOf(1);
  });

  it('renders the FactorBar component', () => {
    let wrapper = shallow(<FactorsBreakdown />);
    expect(wrapper.containsMatchingElement(<FactorBar />)).to.equal(true);
  });

});


describe('FactorBar', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<FactorBar />);
    expect(wrapper.find('.factorBarsInReviews')).to.have.lengthOf(1);
  });

});


describe('Sort', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<Sort />);
    expect(wrapper.find('.outerReviewsBlock')).to.have.lengthOf(1);
  });

  it('renders the ReviewTiles component', () => {
    let wrapper = shallow(<Sort />);
    expect(wrapper.containsMatchingElement(<ReviewTiles />)).to.equal(true);
  });

});


describe('ReviewTiles', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<ReviewTiles />);
    expect(wrapper.find('.outerReviewTiles')).to.have.lengthOf(1);
  });

  it('renders the SingleTile component', () => {
    let wrapper = shallow(<ReviewTiles />);
    expect(wrapper.containsMatchingElement(<SingleTile />)).to.equal(true);
  });

  it('renders the AddReview component', () => {
    let wrapper = shallow(<ReviewTiles />);
    expect(wrapper.containsMatchingElement(<AddReview />)).to.equal(true);
  });

});


describe('SingleTile', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<SingleTile />);
    expect(wrapper.find('.singleTile')).to.have.lengthOf(1);
  });

  it('renders the ReviewForm component', () => {
    let wrapper = shallow(<SingleTile />);
    expect(wrapper.containsMatchingElement(<Images />)).to.equal(true);
  });

});


describe('Images', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<Images />);
    expect(wrapper.find('.imagesInReviews')).to.have.lengthOf(1);
  });

  it('renders the ReviewForm component', () => {
    let wrapper = shallow(<Images />);
    expect(wrapper.containsMatchingElement(<ReviewImgModal />)).to.equal(true);
  });

});


describe('ReviewImgModal', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<ReviewImgModal />);
    expect(wrapper.find('.revImgModal')).to.have.lengthOf(1);
  });

});


describe('AddReview', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<AddReview />);
    expect(wrapper.find('.addReview')).to.have.lengthOf(1);
  });

  it('renders the ReviewForm component', () => {
    let wrapper = shallow(<AddReview />);
    expect(wrapper.containsMatchingElement(<ReviewForm />)).to.equal(true);
  });

});


describe('ReviewForm', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<ReviewForm />);
    expect(wrapper.find('.reviewForm')).to.have.lengthOf(1);
  });

  it('renders the ReviewForm component', () => {
    let wrapper = shallow(<ReviewForm />);
    expect(wrapper.containsMatchingElement(<FormCharacteristic />)).to.equal(true);
  });

});


describe('FormCharacteristic', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<FormCharacteristic />);
    expect(wrapper.find('.formCharacteristicsInReviews')).to.have.lengthOf(1);
  });

});


describe('FormStars', () => {

  it('renders only 1 wrapper', () => {
    let wrapper = shallow(<FormStars />);
    expect(wrapper.find('.formStars')).to.have.lengthOf(1);
  });

});