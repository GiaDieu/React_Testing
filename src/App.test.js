import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../utils';
import React from 'react';

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        { title: 'Example Title 1', body: 'Some Text' },
        { title: 'Example Title 2', body: 'Some Text' },
        { title: 'Example Title 3', body: 'Some Text' },
      ],
    };
    wrapper = setUp(initialState);
  });

  it('Should render without Errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });

  it('Update State Hide method SHOULD update as expected', () => {
    const classInstance = wrapper.instance();
    classInstance.hide();

    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });

  it('Update Count State method SHOULD update as expected', () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleUpdate_methodValue(6);
    expect(newValue).toEqual(7);
  });
});
