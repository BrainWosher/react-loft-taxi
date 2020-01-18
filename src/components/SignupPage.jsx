import React from 'react';

const Signup = () => {
    return (
        
        <form action="">
        <h1>Signup</h1>
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

            <button type="submit" className="">Зарегистрироваться</button>
        </form>
    );
}

export default Signup;