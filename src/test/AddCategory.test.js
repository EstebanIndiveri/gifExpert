import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('pruba en <AddCategody/>', () => {
    test('debe de mostrarse correctamente', () => {
        const setCategories=()=>{};
        const wrapper=shallow(<AddCategory setCategories={setCategories}/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
