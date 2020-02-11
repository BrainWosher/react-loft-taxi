import React from 'react';
import { Grid, Input, Button, FormControl, FormLabel, Link, Typography, styled,  Card } from '@material-ui/core';
import PropTypes from 'prop-types';

const TypographyStyled = styled(Typography)({
    marginBottom: '30px'
});

const AuthCard = styled(Card)({
    padding: '44px 60px',
    width: '500px',
    boxSizing: 'border-box',
});

const LoginContent = ({
    userName,
    password,
    errorPassword,
    preventDefault,
    handleSubmit,
    handleUserNameChange,
    handlePasswordChange,
    changeForm
}) => {
    return <AuthCard >
        <form onSubmit = {handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TypographyStyled variant="h1" component="h1" className="MuiTypography-root jss132 MuiTypography-h4 MuiTypography-alignLeft">Войти</TypographyStyled >
                    <Typography className="MuiTypography-root MuiTypography-body1 MuiTypography-alignLeft">
                        Новый пользователь?
                        <Link href="/signup" onClick={preventDefault}>Зарегистрируйтесь</Link>
                        <Button onClick={changeForm}>Зарегистрируйтесь</Button>
                    </Typography >
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" error={false} component="fieldset">
                    <FormLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-required Mui-required">
                        Имя пользователя* {errorPassword}
                    </FormLabel>
                    <Input
                        type="text"
                        name="username"
                        placeholder="Имя пользователя*"
                        value = {userName}
                        onChange = {handleUserNameChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined" error={false} component="fieldset">
                    <FormLabel className="MuiFormLabel-root MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink Mui-required Mui-required">
                        пароль {errorPassword}
                    </FormLabel>
                    <Input
                        id="login-password-field"
                        name="password"
                        type="password"
                        placeholder="Пароль *"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </FormControl>
            </Grid>
            <Grid container item xs={12} justify="flex-end">
                <Button type="submit" data-testid="login-submit" color="primary" variant="contained">
                    Войти
                </Button>
            </Grid>
        </form>
    </AuthCard>
}

LoginContent.prototype = {
    userName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    errorPassword: PropTypes.func,
    preventDefault: PropTypes.func,
    handleSubmit: PropTypes.func,
    handleUserNameChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    changeForm: PropTypes.func
}

export default LoginContent;