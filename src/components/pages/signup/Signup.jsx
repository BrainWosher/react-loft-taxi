import React, { useCallback, useContext,useMemo, useState } from 'react';
import { Paper, Grid, Input, Button, FormControl, FormLabel, Link, Typography, styled } from '@material-ui/core';
import SignupContent from './SignupContent';
import LoginContent from '../login/LoginContent';
import {AuthConsumer, authHOC } from '../../../Context/context';
import css from './style.module.css';
import logo from '../../../asstets/logo.png';

const GridWrapperStyled = styled(Grid)({
    minHeight:'92vh'
});

const FullContainer = styled(Paper)({
    height: '100vh',
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
                    handlePasswordChange={handlePasswordChange}
                /> : <LoginContent />}
            </Grid>
        </FullContainer>
    )
}

// class Signup extends React.Component {
//     state = {userName: '', password: '', userSurname: '', email: ''};

//     getBgStyle = () => {
//         return css.main__bg;
//     }

//     handleSubmit = event => {
//         event.preventDefault();
//         this.props.changePage('map');
//     }
//     handleUserNameChange = event => {
//         this.setState({userName: event.target.value});
//     }

//     handlePasswordChange = event => {
//         this.setState({password: event.target.value});
//     }

//     handleUserSurnameChange = event => {
//         this.setState({userSurname: event.target.value});
//     }

//     handleEmailChange = event => {
//         this.setState({email: event.target.value});
//     }

//     render() {
//         const {userName, password, userSurname, email } = this.state;
//         const preventDefault = event => event.preventDefault();
//         return (
//             <Paper className = {this.getBgStyle()}>
//                 <GridWrapperStyled className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
//                     <Grid  item xs={3}>
//                         <img src="../../../asstets/logo.png" alt=""/>
//                     </Grid>
//                     <Grid  item xs={3}>
//                         <SignupContent/>
//                     </Grid>
//                 </GridWrapperStyled>
//             </Paper>
//         );
//     }
// }

export default SignupLayout;