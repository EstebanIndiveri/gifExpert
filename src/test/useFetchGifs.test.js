import React from 'react';
const { useFetchGifs } = require("../hooks/useFetchGifs");
import '@testing-library/jest-dom'
import {renderHook} from '@testing-library/react-hooks'
describe('Pruebas en useFetchGifs Hook', () => {
    test('retorna estado inicial', () => {
        // const {data:images,loading}= useFetchGifs('onepunch ');
        const {result}=renderHook(()=>useFetchGifs('onepunch '))
        const {data,loading}=result.current;
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    
})
