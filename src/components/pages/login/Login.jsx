import React, { useCallback, useContext, useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Paper, Grid, styled } from '@material-ui/core';
import css from './style.module.css';
import logo from '../../../asstets/logo.png';
import {Context} from '../../../Context/context';
import LoginContent from './LoginContent';
import SignupContent from '../signup/SignupContent';
//container
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { auth, login as actionLogin } from '../../../dugs/user';


const FullContainer = styled(Paper)({
    height: '98vh',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const LoginLayout = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const isLoggin = useSelector(store => !!store.user.isLoggin)

    useEffect(()=> {
        if (isLoggin) {
            history.replace('/map');
        }
    }, [isLoggin])

    const [active] = useState(false)
    const {login} = useContext(Context);
    const getBgStyle = useMemo(() => {
        return css.main__bg;
    }, [])
    const preventDefault = event => event.preventDefault();
    const history = useHistory();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const result = login({email: email, password});
        dispatch(actionLogin({email: email, password}));
        if (!result) {
            history.replace('/map')
        } else {
            setErrorPassword(result.error)
        }

    }, [email, password])

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, [])

    const handlePasswordChange = useCallback(event => {
        setPassword(event.target.value);
    }, [])
    
    return (
        <FullContainer className={getBgStyle} data-testid="login-layout">
             <Grid item xs={3}>
                <img src={logo} alt=""/>
             </Grid>
             <Grid item xs={3}>
                 {!active ? <LoginContent
                     email={email}
                     password={password}
                     errorPassword={errorPassword}
                     login={login}
                     getBgStyle={getBgStyle}
                     preventDefault={preventDefault}
                     handleSubmit={handleSubmit}
                     handleEmailChange={handleEmailChange}
                     handlePasswordChange={handlePasswordChange}
                 /> : <SignupContent/>}
             </Grid>
         </FullContainer>
    );
}

LoginLayout.prototype = {
    email: PropTypes.string.isRequired,
    changeForm: PropTypes.func,
    password: PropTypes.string.isRequired,
    errorPassword: PropTypes.object,
    login: PropTypes.func,
    getBgStyle: PropTypes.func,
    preventDefault: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleEmailChange: PropTypes.func,
    handlePasswordChange: PropTypes.func
}

export default LoginLayout;