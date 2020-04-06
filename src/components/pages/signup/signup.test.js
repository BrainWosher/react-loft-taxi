import React from 'react';
import { render } from '@testing-library/react';
import SignupLayout from './Signup';

describe('Тест компонента Signup', () => {
  it('SignupLayout component exist', () => {
    expect(<SignupLayout />).toBeTruthy();
  });

  it('SignupLayout is rendered', () => {
    const { getByTestId } = render(<SignupLayout />);
    expect(getByTestId('signup-layout')).toBeInTheDocument();
  });

  it('Inputs test', () => {
    const { container } = render(<SignupLayout />);
    const inputs = container.querySelectorAll('input');

    expect(inputs.length).toBe(4);
  });
});