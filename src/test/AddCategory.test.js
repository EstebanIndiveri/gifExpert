import React from 'react';
import { shallow } from 'enzyme';
import AddCategory from '../components/AddCategory';

describe('pruba en <AddCategody/>', () => {
    const setCategories=jest.fn();
    let wrapper=shallow(<AddCategory setCategories={setCategories}/>);
    beforeEach(()=>{
        jest.clearAllMocks();
    wrapper=shallow(<AddCategory setCategories={setCategories}/>);

    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();

    });
    test('cambiar caja de texto', () => {
        const input=wrapper.find('input');
        const value='hola mundo';
        input.simulate('change',{target:{value:value}});
        expect(wrapper.find('p').text().trim()).toBe(value);

    });

    test('no debe de postear info en el submit', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });
    test('debe de llamar el setCategories y limíar caja', () => {
   
    //     //1simular inputchange
    //     //2.simular el sumbit
    //     //3.setcategories llamado
    //     //4.input =''
        const value='hola mundo';
        wrapper.find('input').simulate('change',{target:{value}});

        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
})
