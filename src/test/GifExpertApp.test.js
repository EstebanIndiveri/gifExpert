import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import GifExpertApp from '../components/GifExpertApp';
describe('match con el snap', () => {
    test('GifExpertApp/>', () => {
        const wrapper=shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();
    });
    test('muestra lista de categories', () => {
        const categories=['one punch','dragon ball'];
        const wrapper=shallow(<GifExpertApp defaultCategories={categories}/>)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
})
