import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../../asstets/logo.png';
import LoginContent from './LoginContent';
import SignupContent from '../signup/SignupContent';
//container
import { login as actionLogin } from '../../../dugs/user';
import FullContainer from '../../common/layout/FullContainer';

const LoginLayout = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const isLoggin = useSelector(store => !!store.user.isLoggin);

  useEffect(() => {
    if (isLoggin) {
      history.replace('/map');
    }
  }, [isLoggin]);

  const [active] = useState(false);
  const preventDefault = event => event.preventDefault();
  const history = useHistory();

  const handleSubmit = useCallback(e => {
      e.preventDefault();
      if (password.length && email.length) {
        dispatch(actionLogin({ email: email, password }));
        return;
      }
      setErrorPassword('Одно из полей пустое!');
    },
    [email, password],
  );

  const handleEmailChange = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(event => {
    setPassword(event.target.value);
  }, []);

  return (
    <FullContainer>
      <Grid item xs={3}>
        <img src={logo} alt="" />
      </Grid>
      <Grid item xs={3}>
        {!active ? (
          <LoginContent
            email={email}
            password={password}
            errorPassword={errorPassword}
            preventDefault={preventDefault}
            handleSubmit={handleSubmit}
            handleEmailChange={handleEmailChange}
            handlePasswordChange={handlePasswordChange}
          />) : (<SignupContent />)}
      </Grid>
    </FullContainer>
  );
};

LoginLayout.prototype = {
  email: PropTypes.string.isRequired,
  changeForm: PropTypes.func,
  password: PropTypes.string.isRequired,
  errorPassword: PropTypes.object,
  login: PropTypes.func,
  preventDefault: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleEmailChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
};

export default LoginLayout;