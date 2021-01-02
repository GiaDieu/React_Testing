import React from 'react';
import {shallow} from 'enzyme';
import { findByTestAttr , checkProps} from '../../../utils';
import SharedButton from './index';

describe('Shared Button Component', () => {
    describe('Checking PropTypes',()=>{
        it('Should NOT throw a warning',()=>{
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEven: () => {}
            }

            const propsErr = checkProps(SharedButton, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Renders',()=>{
        let wrapper;
        beforeEach(()=>{
            const props = {
              buttonText: 'Example Button Text',
              emitEven: () => {},
            };
            wrapper = shallow(<SharedButton {...props}/>);

        });

        it('Should render a button',()=>{
            const button = findByTestAttr(wrapper,'buttonComponent');
            expect(button.length).toBe(1)
        })
    })
})