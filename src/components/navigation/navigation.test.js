import React from 'react';
import Navigation from './Navigation';

describe('Тест компонента Navigation', () => {
    it("Navigation component exist",()=>{
        expect(<Navigation/>).toBeTruthy();
    });
});