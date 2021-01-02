import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../utils';
import ListItem from './index';

describe('ListItem Component', () => {
  describe('Checking propTypes', () => {
    it('Should NOT throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Example Desc',
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('With Title, Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Example Desc',
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it('Should render without Error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a Title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    it('Should render a Description', () => {
      const desc = findByTestAttr(wrapper, 'componentDesc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Without Title, Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Example Desc',
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it('Component should NOT render', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
