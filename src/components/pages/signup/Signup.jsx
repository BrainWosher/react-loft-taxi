import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import SignupContent from './SignupContent';
import LoginContent from '../login/LoginContent';
import logo from '../../../asstets/logo.png';
import { onRegistration } from '../../../dugs/user';
import FullContainer from '../../common/layout/FullContainer';

const SignupLayout = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [active, toggle] = useState(false);
  const preventDefault = event => event.preventDefault();
  const handleSubmit = useCallback(e => {
      e.preventDefault();
      dispatch(
        onRegistration({
          email: email,
          password,
          name,
          surname,
        }),
      );
    },[email, password, name, surname],
  );

  const handleNameChange = useCallback(e => {
    setName(e.target.value);
  }, []);

  const handleSurnameChange = useCallback(e => {
    setSurname(e.target.value);
  }, []);

  const handlePasswordChange = useCallback(event => {
    setPassword(event.target.value);
  }, []);

  const handleEmailChange = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const changeToggle = useCallback(() => {
    toggle(state => !state);
  }, []);

  return (
    <FullContainer>
      <Grid item xs={3}>
        <img src={logo} alt="" />
      </Grid>
      <Grid item xs={3}>
        {!active ? (
          <SignupContent
            name={name}
            surname={surname}
            changeForm={changeToggle}
            password={password}
            email={email}
            errorPassword={errorPassword}
            preventDefault={preventDefault}
            handleSubmit={handleSubmit}
            handleNameChange={handleNameChange}
            handleSurnameChange={handleSurnameChange}
            handlePasswordChange={handlePasswordChange}
            handleEmailChange={handleEmailChange}
          />
        ) : (
          <LoginContent changeForm={changeToggle} />
        )}
      </Grid>
    </FullContainer>
  );
};
SignupLayout.prototype = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeForm: PropTypes.func,
  errorPassword: PropTypes.object,
  login: PropTypes.func,
  preventDefault: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleNameChange: PropTypes.func,
  handleSurnameChange: PropTypes.func,
  handlePasswordChange: PropTypes.func,
  handleEmailChange: PropTypes.func,
};
export default SignupLayout;