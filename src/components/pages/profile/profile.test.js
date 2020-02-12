import React from 'react';
import Profile from './Profile';

describe('Тест компонента Profile', () => {
    it("Profile component exist",()=>{
        expect(<Profile/>).toBeTruthy();
    });
});