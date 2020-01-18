import React from 'react';

const Login = () => {
    return (
        <form action="">
        <h1>Login</h1>
            <input
                type="text"
                name="username"
                className=""
                placeholder="Имя пользователя"
            />
            <input
                type="password"
                name="password"
                className=""
                placeholder="Пароль"
            />

            <button type="submit" className="">Войти</button>
        </form>
    );
}

export default Login;