import React from 'react';
import LoginContent from './LoginContent';
import { render, fireEvent } from '@testing-library/react';

const props = {
  userName: 'user',
  password: 'passw',
  errorPassword: '',
  preventDefault: jest.fn(),
  handleSubmit: jest.fn(),
  handleUserNameChange: jest.fn(),
  handlePasswordChange: jest.fn(),
  changeForm: jest.fn(),
};

describe('Тест компонента Login', () => {
  it('LoginContent component exist', () => {
    expect(<LoginContent />).toBeTruthy();
  });
  it('LoginContent is rendered', () => {
    const { getByTestId } = render(<LoginContent />);
    expect(getByTestId('login-content')).toBeInTheDocument();
  });
  it('input test', () => {
    const { container } = render(<LoginContent {...props} />);
    const inputs = container.querySelectorAll('input');
    const value = inputs[0].value;
    expect(value).toBe(props.userName);
    const pass = inputs[1].value;
    expect(pass).toBe(props.password);

    expect(inputs.length).toBe(2);
  });

  it('test submit button', () => {
    const { getByTestId } = render(<LoginContent {...props} />);
    fireEvent.submit(getByTestId('submit'));
    expect(props.handleSubmit).toBeCalled();
  });
});