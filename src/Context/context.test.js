import React from 'react';
import { AuthProvider, AuthConsumer} from './context';

describe('Тест компонента context', () => {
    it("AuthProvider component exist",()=>{
        expect(<AuthProvider/>).toBeTruthy();
    });
    it("AuthConsumer component exist",()=>{
        expect(<AuthConsumer/>).toBeTruthy();
    });
});