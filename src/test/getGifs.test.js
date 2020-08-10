import React from 'react';
import PropTypes from 'prop-types';
import { getGifs } from '../helpers/getGifs';

describe('pruebe getGifs', () => {
    test('trae 10 elementos', async() => {
        const gifs=await getGifs('One Punch');

        expect(gifs.length).toBe(10);
    });

    test('viene vacio', async() => {
        const gifs=await getGifs('');

        expect(gifs.length).toBe(0);
    });

    
})
