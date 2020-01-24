import React from 'react';


class Login extends React.Component {
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
        <form onSubmit = {this.handleSubmit} >
        <h1>Login</h1>
            <input
                type="text"
                name="username"
                className=""
                placeholder="Имя пользователя"
                value = {userName}
                onChange = {this.handleUserNameChange}
            />
            <input
                type="password"
                name="password"
                className=""
                placeholder="Пароль"
                value = {password}
                onChange = {this.handlePasswordChange}
            />

            <input type="submit" className="" value="Войти"/>
        </form>
        );
    }
}

export default Login;