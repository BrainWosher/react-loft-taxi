import React from 'react';
import SignupContent from './SignupContent';
import { render, fireEvent } from '@testing-library/react';

const props = {
    email: 'test email',
    userName: 'user',
    userSurname: 'user surname',
    password: 'passw',
    errorPassword: '',
    preventDefault: jest.fn(),
    handleSubmit: jest.fn(),
    // если клик
    //     (e) => {
    //     e.preventDefault()
    //     jest.fn()
    //// },
    handleUserNameChange: jest.fn(),
    handlePasswordChange: jest.fn(),
    changeForm: jest.fn(),
}

describe('Тест компонента Login', () => {
    it("LoginContent component exist",()=>{
        expect(<SignupContent/>).toBeTruthy();
    });
    it('input test', () => {
        const {container} = render(<SignupContent {...props}/>);
        const inputs = container.querySelectorAll('input');
        const email  = inputs[0].value
        expect(email).toBe(props.email)
        const userName  = inputs[1].value
        expect(userName).toBe(props.userName)
        const userSurname  = inputs[2].value
        expect(userSurname).toBe(props.userSurname)
        const pass  = inputs[3].value
        expect(pass).toBe(props.password)

        expect(inputs.length).toBe(4);
    });

    it('test submit button', () => {
        const {getByTestId} = render(<SignupContent {...props}/>);
        fireEvent.submit(getByTestId('signup-submit'))
        expect(props.handleSubmit).toBeCalled()
    });
    it('SignupContent is rendered', () => {
        const { getByTestId } = render(<SignupContent/>);
        expect(getByTestId('signup-content')).toBeInTheDocument();
    });
});