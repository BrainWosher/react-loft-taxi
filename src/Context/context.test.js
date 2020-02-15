import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AuthProvider, Context} from './context';

describe('Тест компонента context', () => {
    it("AuthProvider component exist",()=>{
        expect(<AuthProvider/>).toBeTruthy();
    });
    it("Context component exist",()=>{
        expect(<Context/>).toBeTruthy();
    });
});

// const Mock = () => (
//     <AuthProvider>
//         <Context.Consumer>
//             {({ isLoggedIn, email, password }) => {
//                 const setStatusFalse = () => {
//                     setStatus(false)
//                 }
//                 return <>
//                     <button type="button" data-testid="isLoggedIn" onClick={setStatusFalse}></button>

//                     <input data-testid="email-test" value={email}/>
//                     <input data-testid="passowrd-test" value={password}/>
//                 </>
//             }}
//         </Context.Consumer>
//     </AuthProvider>
// );
// describe('Context', () => {
//     it('свойство контекста', () => {
//         const { getByTestId, debug } = render(Mock());
//         const testedContet = getByTestId('locale').textContent;
//         expect(testedContet).toEqual('en-US');
//     });

//     it('при вызове метода контекста вернет перевод', () => {
//         const { getByTestId } = render(Mock());
//         const div = getByTestId('locale');
//         const btn = getByTestId('setLocale');
//         fireEvent.click(btn);
//         expect(div.textContent).toEqual('ru-RU');
//     });
// });