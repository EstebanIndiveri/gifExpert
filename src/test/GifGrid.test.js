import React from 'react';
import GifGrid from '../components/GifGrid';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../hooks/useFetchGifs';
import '@testing-library/jest-dom'

jest.mock('../hooks/useFetchGifs');
describe('Si funciona <GifGrif/>', () => {
    const categorie='hola';
    test('mostrarse correctamente ', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            oading:true
        });
        const wrapper=shallow(<GifGrid categorie={categorie}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('useFetchGifs regresa items', () => {
        const gifs=[{
            id:'abc',
            url:'https://localhost',
            title:'titulo'
        }]
        useFetchGifs.mockReturnValue({
            data:gifs,
            oading:true
        });
        const wrapper=shallow(<GifGrid categorie={categorie}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GrifGridItem').length).toBe(gifs.length);
    });
    
    
})
