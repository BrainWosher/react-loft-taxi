import React from 'react';
import Profile from './Profile';
import { fireEvent, render, getByText } from '@testing-library/react';

it("Profile component exist",()=>{
    const { getByText, getByTestId } = render(<Profile/>);
    expect(getByTestId('page-profile')).toBeInTheDocument();

    const text = getByText('Profile');
    expect(text).toBeTruthy();
});

it('Inputs test', () => {
    const {container} = render(<Profile/>);
    const inputs = container.querySelectorAll('input');

    expect(inputs.length).toBe(4);
});