import React from 'react';
import Profile from './Profile';
import { fireEvent, render, getByText } from '@testing-library/react';

const props = {
    cardNumber: '1231234',
    validThru: '03/123',
    nameOwner: 'Name Owner',
    cvc: '324234134',
    errorPassword: '',
    preventDefault: jest.fn(),
    handleSubmit: jest.fn(),
    // если клик
    //     (e) => {
    //     e.preventDefault()
    //     jest.fn()
    //// },
    handleCardNumberChange: jest.fn(),
    handleValidThruChange: jest.fn(),
    handleNameOwnerChange: jest.fn(),
    handleCvcChange: jest.fn()
}

it("Profile component exist",()=>{
    const { getByText, getByTestId } = render(<Profile {...props}/>);
    expect(getByTestId('page-profile')).toBeInTheDocument();

    const text = getByText('Profile');
    expect(text).toBeTruthy();
});

it('Inputs test', () => {
    const {container} = render(<Profile {...props}/>);
    const inputs = container.querySelectorAll('input');
    const cardNumber = inputs[0].value
    expect(cardNumber).toBe(props.cardNumber)
    const validThru = inputs[1].value
    expect(validThru).toBe(props.validThru)
    const nameOwner = inputs[2].value
    expect(nameOwner).toBe(props.nameOwner)
    const cvc = inputs[3].value
    expect(cvc).toBe(props.cvc)

    expect(inputs.length).toBe(4);
});

it('Profile page submit button test', () => {
    const {getByTestId} = render(<Profile {...props} />);
    fireEvent.submit(getByTestId('profile-submit'))
    expect(props.handleSubmit).toBeCalled()
});
// it('Значения в инпуте ввода имени изменяются', () => {
//     const handleCardNumberChange = jest.fn();
//     const { getByPlaceholderText } = render(<Profile handleCardNumberChange={handleCardNumberChange} {...props}/>);
//     const input = getByPlaceholderText('USER NAME');
//     fireEvent.change(input, { target: { value: 'USER' } });
//     expect(input.value).toBe('USER');
//     expect(handleCardNumberChange).toBeCalled();
// });