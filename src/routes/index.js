import React from 'react';

import GetComponents from './helper'
import Login from '../components/pages/login/Login';
import Profile from '../components/pages/profile/Profile';
import Signup from '../components/pages/signup/Signup';
import Map from '../components/pages/map/Map';
export default [
    {
        path: 'profile',
        component: (props) => <GetComponents componentName={'Profile'} {...props}/>
    },
    {
        path: 'map',
        component: (props) => <GetComponents componentName={'Map'} {...props}/>
    },
    {
        path: 'login',
        component: (props) => <GetComponents componentName={'Login'} {...props}/>
    },
    {
        path: 'signup',
        component: (props) => <GetComponents componentName={'Signup'} {...props}/>
    },
]