import React, { useCallback, useContext,useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, styled } from '@material-ui/core';
import SignupContent from './SignupContent';
import LoginContent from '../login/LoginContent';
import {AuthConsumer} from '../../../Context/context';
import css from './style.module.css';
import logo from '../../../asstets/logo.png';

const FullContainer = styled(Paper)({
    height: '98vh',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

const SignupLayout = ({
    changePage
}) => {
    const [userName, setUsername] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const [active, toggle] = useState(false);
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

    const handleUserSurnameChange = useCallback((e) => {
        setUserSurname(e.target.value);
    }, [])

    const handlePasswordChange = useCallback(event => {
        setPassword(event.target.value);
    }, [])

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value);
    }, [])

    const changeToggle = useCallback(()=>{
        toggle(state => !state);
    }, [])

    return (
        <FullContainer className={getBgStyle}>
            <Grid item xs={3}>
            <img src={logo} alt=""/>
            </Grid>
            <Grid item xs={3}>
                {!active ? <SignupContent
                    userName={userName}
                    userSurname={userSurname}
                    changeForm={changeToggle}
                    password={password}
                    email={email}
                    errorPassword={errorPassword}
                    login={login}
                    getBgStyle={getBgStyle}
                    preventDefault={preventDefault}
                    handleSubmit={handleSubmit}
                    handleUserNameChange={handleUserNameChange}
                    handleUserSurnameChange={handleUserSurnameChange}
                    handlePasswordChange={handlePasswordChange}
                    handleEmailChange={handleEmailChange}
                /> : <LoginContent />}
            </Grid>
        </FullContainer>
    )
}
SignupLayout.prototype = {
    userName: PropTypes.string.isRequired,
    userSurname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    changeForm: PropTypes.func,
    errorPassword: PropTypes.object,
    login: PropTypes.func,
    getBgStyle: PropTypes.func,
    preventDefault: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleUserNameChange: PropTypes.func,
    handleUserSurnameChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    handleEmailChange: PropTypes.func
}
export default SignupLayout;