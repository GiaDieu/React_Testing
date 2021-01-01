import React from 'react'
import {shallow} from 'enzyme';
import HeadLine from '../headline';
import { findByTestAttr, checkProps } from '../../../utils/';

const setUp = (props) => {
    const component = shallow(<HeadLine {...props} />);
    return component;
}

describe('HeadLine Component', () => {

    describe('Checking Protypes',()=>{
        it('Should not throw a warning',()=>{
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Description',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: 'Test email',
                    age: 32,
                    onlineStatus: false
                }]
            }

            const propsErr = checkProps(HeadLine, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    });

    describe('Have Props', () => {
        let wrapper;
        beforeEach(()=>{
            const props = {
                header:'Test Header',
                desc: 'Test Description'
            }
            wrapper = setUp(props);
        });

        it('Should render without errors',()=>{
            const component = findByTestAttr(wrapper, 'headLineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render tag H1 without errors', () => {
          const header = findByTestAttr(wrapper, 'header');
          expect(header.length).toBe(1);
        });

        it('Should render Description with no erros',()=>{
            const desc = findByTestAttr(wrapper,'desc');
            expect(desc.length).toBe(1);
        })
    });

    describe('Have No Props', () => {
        let wrapper;
        beforeEach(()=>{
            wrapper = setUp()
        })

        it('Should not render',()=> {
            const component = findByTestAttr(wrapper, 'headLineComponent');
            expect(component.length).toBe(0);
        })
        
    });

})