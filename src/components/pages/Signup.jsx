import React from 'react';
import { Input, Button, FormGroup, styled } from '@material-ui/core';

const FormGroupStyled = styled(FormGroup)({
    maxWidth: '502px',
    padding: '52px 64px 59px 63px',
    borderRadius: '3px'
});

const ButtonStyled = styled(Button)({
    borderRadius: '4px',
    backgroundColor: '#ffc617',
    fontSize: '21px',
    fontWeight: 400
});

class Signup extends React.Component {
    state = {userName: '', password: ''};

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
    return (
        <FormGroupStyled onSubmit = {this.handleSubmit}>
        <h1>Signup</h1>
            <Input
                type="text"
                name="username"
                className=""
                placeholder="Имя пользователя"
                value = {userName}
                onChange = {this.handleUserNameChange}
            />
            <Input
                type="password"
                name="password"
                className=""
                placeholder="Пароль"
                value = {password}
                onChange = {this.handlePasswordChange}
            />
            <ButtonStyled type="submit">Зарегистрироваться</ButtonStyled>
        </FormGroupStyled>
        );
    }
}

export default Signup;