import React from 'react';
import {shallow} from 'enzyme';
import GrifGridItem from '../components/GifGridItem';
import '@testing-library/jest-dom'
describe('<GifGridItem/>', () => {
    test('debe de mostrar el componente correctamente', () => {
        const wrapper=shallow(<GrifGridItem/>)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de llamar el setCategories y limíar caja', () => {
        //1simular inputchange
        //2.simular el sumbit
        //3.setcategories llamado
        //4.input =''
        const value
        test('should ', () => {
            
        })
        
    })
    
    
})
