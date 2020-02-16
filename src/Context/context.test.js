import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { AuthProvider, Context} from './context';

describe('Тест компонента context', () => {
    it("AuthProvider component exist",()=>{
        expect(<AuthProvider/>).toBeTruthy();
    });
});

const Auth = () => {
    return <AuthProvider>
        <Context.Consumer>
            {({ isLoggedIn, login, logout}) => {
                const handleLogin = () => {
                    login({
                        email: 'test@test.test',
                        password: 'test'
                    })
                }
                return <>
                    <button type="button" data-testid="login" onClick={handleLogin}>Login</button>
                    <button type="button" data-testid="logout" onClick={logout}>Logout</button>
                    <div data-testid="status">{String(isLoggedIn)}</div>
                </>
            }}
        </Context.Consumer>
    </AuthProvider>
}
describe('Тест компонента контекст', () => {
    it('AuthProvider component exist', () => {
        const {getByTestId} = render(Auth())
        const loginBtn = getByTestId('login')
        const logoutBtn = getByTestId('logout')
        const status = getByTestId('status')
        expect(status.textContent).toEqual('false');
        fireEvent.click(loginBtn);
        expect(status.textContent).toEqual('true');
        fireEvent.click(logoutBtn);
        expect(status.textContent).toEqual('false');
    });
    it("Context component exist",()=>{
        expect(<Context/>).toBeTruthy();
    });
});