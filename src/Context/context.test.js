import React from 'react';
import { AuthProvider, Context} from './context';

describe('Тест компонента context', () => {
    it("AuthProvider component exist",()=>{
        expect(<AuthProvider/>).toBeTruthy();
    });
    it("Context component exist",()=>{
        expect(<Context/>).toBeTruthy();
    });
});