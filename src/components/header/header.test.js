import React from 'react';
import Header from './Header';

describe('Тест компонента Header', () => {
  it('Header component exist', () => {
    expect(<Header />).toBeTruthy();
  });
});