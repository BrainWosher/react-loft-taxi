import React from 'react';
import Main from './Main';

describe('Тест компонента Main', () => {
    it("Main component exist",()=>{
        expect(<Main/>).toBeTruthy();
    });
});