import React from 'react';
import { Grid, Input, Button, FormControl, FormLabel, Typography, styled, Card} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TypographyStyled = styled(Typography)({
  marginBottom: '30px',
});

const AuthCard = styled(Card)({
  padding: '44px 60px',
  width: '500px',
  boxSizing: 'border-box',
});

const LoginContent = ({
  email,
  password,
  errorPassword,
  preventDefault,
  handleSubmit,
  handleEmailChange,
  handlePasswordChange,
}) => {
  return (
    <AuthCard>
      <form onSubmit={handleSubmit} data-testid="login-content">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TypographyStyled variant="h1" component="h1" className="MuiTypography-root jss132 MuiTypography-h4 MuiTypography-alignLeft">
              Войти
            </TypographyStyled>
            <Typography className="MuiTypography-root MuiTypography-body1 MuiTypography-alignLeft">
              Новый пользователь? <Link to="/signup">Зарегистрируйтесь</Link>
            </Typography>
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
              value={email}
              onChange={handleEmailChange}
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
          <Button
            type="submit"
            data-testid="login-submit"
            color="primary"
            variant="contained"
          >
            Войти
          </Button>
        </Grid>
      </form>
    </AuthCard>
  );
};

LoginContent.prototype = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  errorPassword: PropTypes.func,
  preventDefault: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  changeForm: PropTypes.func,
};

export default LoginContent;