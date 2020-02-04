import React from 'react';
import { Paper, Grid, Input, Button, FormControl,FormHelperText, FormLabel, Link, Typography, styled } from '@material-ui/core';
import css from './style.module.css';
import {Logo} from 'loft-taxi-mui-theme';

const GridWrapperStyled = styled(Grid)({
    minHeight:'92vh'
});

const TypographyStyled = styled(Typography)({
    marginBottom: '30px'
});

const GridGapStyled = styled(Grid)({
    padding: '54px 35px 59px 65px',
    marginTop: '48px',
    marginBottom: '48px'
});

const FormControlStyled = styled(FormControl)({
    marginBottom:'32px'
});

const ButtonStyled = styled(Button)({
    padding: '9px 50px',
    borderRadius: '4px',
    backgroundColor: '#ffc617',
    fontSize: '21px',
    fontWeight: 400,
    marginTop: '40px'
});

class Login extends React.Component {
    state = {userName: '', password: ''};

    getBgStyle = () => {
        return css.main__bg;
    }
    

    handleSubmit = event => {
        event.preventDefault();
        this.props.changePage('map');
    }

    handleUserNameChange = event => {
        this.setState({userName: event.target.value});
    }
    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    }

    render() {
        const {userName, password} = this.state;
        const preventDefault = event => event.preventDefault();
        return (
            <Paper className = {this.getBgStyle()}>
                <GridWrapperStyled className="MuiGrid-root MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                        <img src="../../../asstets/logo.png" alt=""/>
                    </Grid>
                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-3">
                        <Paper className="MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded">
                            <form onSubmit = {this.handleSubmit}>
                                <GridGapStyled className="MuiGrid-root MuiGrid-container">
                                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <TypographyStyled variant="h1" component="h1" className="MuiTypography-root jss132 MuiTypography-h4 MuiTypography-alignLeft">Войти</TypographyStyled >
                                        <Typography className="MuiTypography-root MuiTypography-body1 MuiTypography-alignLeft">
                                            Новый пользователь? 
                                            <Link href="/signup" onClick={preventDefault}>Зарегистрируйтесь</Link>
                                        </Typography >
                                    </Grid>
                                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <FormControlStyled className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                            <FormLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-required Mui-required">
                                                Имя пользователя*
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="username"
                                                placeholder="Имя пользователя*"
                                                value = {userName}
                                                onChange = {this.handleUserNameChange}
                                            />
                                            <FormHelperText className="MuiFormHelperText-root Mui-error Mui-required">
                                                Это обязательное поле
                                            </FormHelperText>
                                        </FormControlStyled>
                                    </Grid>
                                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <FormControl className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                            <FormLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-required Mui-required">
                                                Пароль*
                                            </FormLabel>
                                            <Input
                                                type="password"
                                                name="password"
                                                placeholder="Пароль*"
                                                value = {password}
                                                onChange = {this.handlePasswordChange}
                                            />
                                            <FormHelperText className="MuiFormHelperText-root Mui-error Mui-required">
                                                Это обязательное поле
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" align="right">
                                        <ButtonStyled type="submit">Войти</ButtonStyled>
                                    </Grid>
                                </GridGapStyled>
                            </form>
                        </Paper>
                    </Grid>
                </GridWrapperStyled>
            </Paper>
        );
    }
}

export default Login;