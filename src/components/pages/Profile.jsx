import React from 'react';
import { Input, Button, FormControl, FormGroup, FormLabel, Typography, styled } from '@material-ui/core';
import {MCLogo} from 'loft-taxi-mui-theme';

const FormGroupStyled = styled(FormGroup)({
    maxWidth: '945px',
    padding: '75px 61px 75px 72px',
    borderRadius: '3px'
});

const ButtonStyled = styled(Button)({
    borderRadius: '4px',
    backgroundColor: '#ffc617',
    fontSize: '21px',
    fontWeight: 400
});

class Profile extends React.Component { 
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
            <Typography align="center"><h1>Profile</h1></Typography >
            <Typography align="center"><p>Способ оплаты</p></Typography >
                <FormGroup>
                    <FormControl>
                        <FormLabel>Номер карты:</FormLabel>
                        <Input
                            type="text"
                            name="username"
                            className=""
                            placeholder="Имя пользователя"
                            value = {userName}
                            onChange = {this.handleUserNameChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Срок действия:</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            className=""
                            placeholder="Пароль"
                            value = {password}
                            onChange = {this.handlePasswordChange}
                        />
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormControl>
                        <FormLabel>Имя владельца:</FormLabel>
                        <Input
                            type="text"
                            name="username"
                            className=""
                            placeholder="Имя пользователя"
                            value = {userName}
                            onChange = {this.handleUserNameChange}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>CVC:</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            className=""
                            placeholder="Пароль"
                            value = {password}
                            onChange = {this.handlePasswordChange}
                        />
                    </FormControl>
                </FormGroup>
                <ButtonStyled type="submit">Сохранить</ButtonStyled>
            </FormGroupStyled>
        );
    }
}

export default Profile;