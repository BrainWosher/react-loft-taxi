import React from 'react';
import LoginLayout from './Login';
import { render } from '@testing-library/react';

describe('Тест компонента Login', () => {
  it('LoginLayout component exist', () => {
    expect(<LoginLayout />).toBeTruthy();
  });

  it('LoginLayout is rendered', () => {
    const { getByTestId } = render(<LoginLayout />);
    expect(getByTestId('login-layout')).toBeInTheDocument();
  });

  it('inputs test', () => {
    const { container } = render(<LoginLayout />);
    const inputs = container.querySelectorAll('input');

    expect(inputs.length).toBe(2);
  });
});