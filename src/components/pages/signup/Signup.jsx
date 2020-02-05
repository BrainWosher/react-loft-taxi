import React from 'react';
import { Paper, Grid, Input, Button, FormControl, FormLabel, Link, Typography, styled } from '@material-ui/core';
import css from './style.module.css';

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
const GridPaddingLeftStyled = styled(Grid)({
    paddingLeft: '8px'
});
const GridPaddingRightStyled = styled(Grid)({
    paddingRight: '8px'
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

class Signup extends React.Component {
    state = {userName: '', password: '', userSurname: '', email: ''};

    getBgStyle = () => {
        return css.main__bg;
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.changePage('map');
        // this.props.changeLoggedStatus();
    }
    handleUserNameChange = event => {
        this.setState({userName: event.target.value});
    }

    handlePasswordChange = event => {
        this.setState({password: event.target.value});
    }

    handleUserSurnameChange = event => {
        this.setState({userSurname: event.target.value});
    }

    handleEmailChange = event => {
        this.setState({email: event.target.value});
    }

    render() {
        const {userName, password, userSurname, email } = this.state;
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
                                            Уже зарегистрированы? 
                                            <Link href="/login" onClick={preventDefault}>Войти</Link>
                                        </Typography >
                                    </Grid>
                                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <FormControlStyled className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                            <FormLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-required Mui-required">
                                            </FormLabel>
                                            <Input
                                                type="text"
                                                name="email"
                                                placeholder="Адрес электронной почты *"
                                                value = {email}
                                                onChange = {this.handleEmailChange}
                                                required
                                            />
                                        </FormControlStyled>
                                    </Grid>
                                    <GridPaddingRightStyled className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6">
                                        <FormControlStyled className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                            <Input className=""
                                                type="text"
                                                name="username"
                                                placeholder="Имя*"
                                                value = {userName}
                                                onChange = {this.handleUserNameChange}
                                                required
                                            />
                                        </FormControlStyled>
                                    </GridPaddingRightStyled>
                                    <GridPaddingLeftStyled className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6">
                                        <FormControlStyled className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                            <Input
                                                type="text"
                                                name="username"
                                                placeholder="Фамилия*"
                                                value = {userSurname}
                                                onChange = {this.handleUserSurnameChange}
                                                required
                                            />
                                        </FormControlStyled>
                                    </GridPaddingLeftStyled>
                                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                                        <FormControl className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
                                            <Input
                                                type="password"
                                                name="password"
                                                placeholder="Пароль*"
                                                value = {password}
                                                onChange = {this.handlePasswordChange}
                                                required
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12" align="right">
                                        <ButtonStyled type="submit">Зарегистрироваться</ButtonStyled>
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

export default Signup;