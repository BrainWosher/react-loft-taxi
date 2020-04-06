import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Input, Button, FormControl, Typography, styled} from '@material-ui/core';
import { Link } from 'react-router-dom';

const TypographyStyled = styled(Typography)({
  marginBottom: '30px',
});

const GridGapStyled = styled(Grid)({
  padding: '54px 35px 59px 65px',
  marginTop: '48px',
  marginBottom: '48px',
});
const GridPaddingLeftStyled = styled(Grid)({
  paddingLeft: '8px',
});
const GridPaddingRightStyled = styled(Grid)({
  paddingRight: '8px',
});

const FormControlStyled = styled(FormControl)({
  marginBottom: '32px',
});

const ButtonStyled = styled(Button)({
  padding: '9px 50px',
  borderRadius: '4px',
  backgroundColor: '#ffc617',
  fontSize: '21px',
  fontWeight: 400,
  marginTop: '40px',
});

const SignupContent = ({
  name,
  password,
  email,
  surname,
  errorPassword,
  preventDefault,
  handleSubmit,
  handleNameChange,
  handlePasswordChange,
  handleEmailChange,
  handleSurnameChange,
}) => {
  return (
    <Paper root elevation1 rounded outlined data-testid={'signup-content'}>
      <form onSubmit={handleSubmit}>
        <GridGapStyled className="MuiGrid-root MuiGrid-container">
          <Grid item xs={12}>
            <TypographyStyled
              variant="h1"
              component="h1"
              className="MuiTypography-root jss132 MuiTypography-h4 MuiTypography-alignLeft"
            >
              Войти
            </TypographyStyled>
            <Typography className="MuiTypography-root MuiTypography-body1 MuiTypography-alignLeft">
              Уже зарегистрированы? <Link to="/login">Войти</Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlStyled className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
              <Input
                type="text"
                name="email"
                placeholder="Адрес электронной почты *"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </FormControlStyled>
          </Grid>
          <GridPaddingRightStyled item xs={6}>
            <FormControlStyled className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
              <Input
                type="text"
                name="name"
                placeholder="Имя*"
                value={name}
                onChange={handleNameChange}
                required
              />
            </FormControlStyled>
          </GridPaddingRightStyled>
          <GridPaddingLeftStyled item xs={6}>
            <FormControlStyled className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
              <Input
                type="text"
                name="surname"
                placeholder="Фамилия*"
                value={surname}
                onChange={handleSurnameChange}
                required
              />
            </FormControlStyled>
          </GridPaddingLeftStyled>
          <Grid item xs={12}>
            <FormControl className="MuiFormControl-root MuiTextField-root MuiFormControl-fullWidth">
              <Input
                type="password"
                name="password"
                placeholder="Пароль*"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <ButtonStyled type="submit" data-testid="signup-submit">
              Войти
            </ButtonStyled>
          </Grid>
        </GridGapStyled>
      </form>
    </Paper>
  );
};

SignupContent.prototype = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  errorPassword: PropTypes.func,
  preventDefault: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleNameChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleEmailChange: PropTypes.func,
  handleSurnameChange: PropTypes.func,
  changeForm: PropTypes.func,
};

export default SignupContent;