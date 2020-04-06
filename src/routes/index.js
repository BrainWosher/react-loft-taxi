import React from 'react';

import GetComponents from './helper';
export default [
  {
    path: 'profile',
    component: props => <GetComponents componentName={'Profile'} {...props} />,
  },
  {
    path: 'map',
    component: props => <GetComponents componentName={'Map'} {...props} />,
  },
  {
    path: 'login',
    component: props => <GetComponents componentName={'Login'} {...props} />,
  },
  {
    path: 'signup',
    component: props => <GetComponents componentName={'Signup'} {...props} />,
  },
];