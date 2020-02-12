import React from 'react';
import LoginLayout from './Login';
import LoginContent from './LoginContent';

describe('Тест компонента Login', () => {
    it("LoginLayout component exist",()=>{
        expect(<LoginLayout/>).toBeTruthy();
    });
    it("LoginContent component exist",()=>{
        expect(<LoginContent/>).toBeTruthy();
    });
});