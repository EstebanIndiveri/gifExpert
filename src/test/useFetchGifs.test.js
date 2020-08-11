import React from 'react';
const {
    useFetchGifs
} = require("../hooks/useFetchGifs");
import '@testing-library/jest-dom'
import {
    renderHook
} from '@testing-library/react-hooks'
describe('Pruebas en useFetchGifs Hook', () => {
    test('retorna estado inicial', async () => {
        // const {data:images,loading}= useFetchGifs('onepunch ');
        const {
            result,
            waitForNextUpdate
        } = renderHook(() => useFetchGifs('onepunch '))
        const {
            data,
            loading
        } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    test('debe de retornar array de img y loading false ', async () => {
        const {
            result,
            waitForNextUpdate
        } = renderHook(() => useFetchGifs('onepunch '))
        await waitForNextUpdate();
        const {
            data,
            loading
        } = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
})