import React from 'react';
import {shallow} from 'enzyme';
import GrifGridItem from '../components/GifGridItem';
import '@testing-library/jest-dom'
describe('<GifGridItem/>', () => {
    const title='un titulo';
    const url='https://localhost/algo.jpg'
    const wrapper=shallow(<GrifGridItem title={title} url={url}/>)

    test('debe de mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    test('debe de tener un parrafo con el title', () => {
        const p=wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    test('tiene la imagen=url y alt', () => {
        const img=wrapper.find('img');
        console.log(img.props().src)
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });
    
    test('debe de tener animate fadeIn', () => {
        const div=wrapper.find('div');
        const className=div.prop('className');
        expect(className.includes('animate__fadeIn')).toBe(true);
    });
    


    
    
})
