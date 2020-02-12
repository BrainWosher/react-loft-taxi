import React from 'react';
import SignupLayout from './Signup';
import SignupContent from './SignupContent';

describe('Тест компонента Signup', () => {
    it("SignupLayout component exist",()=>{
        expect(<SignupLayout/>).toBeTruthy();
    });
    it("SignupContent component exist",()=>{
        expect(<SignupContent/>).toBeTruthy();
    });
});