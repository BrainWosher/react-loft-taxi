import React, { useCallback, useContext,useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, styled } from '@material-ui/core';
import css from './style.module.css';
import logo from '../../../asstets/logo.png';
import {AuthConsumer} from '../../../Context/context';
import LoginContent from './LoginContent';
import SignupContent from '../signup/SignupContent';

const FullContainer = styled(Paper)({
    height: '98vh',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const LoginLayout = ({
    changePage
}) => {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const [active, toggle] = useState(false)
    const {login} = useContext(AuthConsumer);
    const getBgStyle = useMemo(() => {
        return css.main__bg;
    }, [])
    const preventDefault = event => event.preventDefault();
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const result = login({email: userName, password});
        if (!result) {
            changePage('map')
        } else {
            setErrorPassword(result.error)
        }

    }, [userName, password])

    const handleUserNameChange = useCallback((e) => {
        setUsername(e.target.value);
    }, [])

    const handlePasswordChange = useCallback(event => {
        setPassword(event.target.value);
    }, [])
    const changeToggle = useCallback(() => {
        toggle(state => !state)
    }, [])
    return (
        <FullContainer className={getBgStyle}>
             <Grid item xs={3}>
                <img src={logo} alt=""/>
             </Grid>
             <Grid item xs={3}>
                 {!active ? <LoginContent
                     userName={userName}
                     changeForm={changeToggle}
                     password={password}
                     errorPassword={errorPassword}
                     login={login}
                     getBgStyle={getBgStyle}
                     preventDefault={preventDefault}
                     handleSubmit={handleSubmit}
                     handleUserNameChange={handleUserNameChange}
                     handlePasswordChange={handlePasswordChange}
                 /> : <SignupContent />}
             </Grid>
         </FullContainer>
    );
}

LoginLayout.prototype = {
    userName: PropTypes.string.isRequired,
    changeForm: PropTypes.func,
    password: PropTypes.string.isRequired,
    errorPassword: PropTypes.object,
    login: PropTypes.func,
    getBgStyle: PropTypes.func,
    preventDefault: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleUserNameChange: PropTypes.func,
    handlePasswordChange: PropTypes.func
}

export default LoginLayout;