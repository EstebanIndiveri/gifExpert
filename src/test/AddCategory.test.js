import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('pruba en <AddCategody/>', () => {
    const setCategories=()=>{};
    const wrapper=shallow(<AddCategory setCategories={setCategories}/>);
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    });
    test('cambiar caja de texto', () => {
        const input=wrapper.find('input');
        const value='hola mundo';
        input.simulate('change',{target:{value:value}});
        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    
    
})
