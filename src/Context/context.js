import React, { PureComponent } from 'react';

const {
    Provider,
    Consumer: AuthConsumer
} = React.createContext('');

class AuthProvider extends PureComponent {
    state = {
        isLoggedIn: false,
        email: '',
        password: '',
    }

    login = ({email, password}) => {
        if (password.length && email.length){
            this.setState({
                isLoggedIn: true,
                email,
                password
            });
            return null;
        }
        return {error: 'Одно из полей пустое!'}
    }

    logout = () => {
        this.setState({
            isLoggedIn: false,
            email: '',
            password: ''
        });
    }

    render() {
        const { children } = this.props;
        const { isLoggedIn, email, password } = this.state;
        return(
            <Provider
                value = {{
                    isLoggedIn,
                    email,
                    password,
                    login: this.login,
                    logout: this.logout
                }}>
                {children}
            </Provider>
        );
    }
}

function authHOC(WrappedComponent){
    return class extends PureComponent {
        static displayName = 'authHOC'

        render() {
            return (
                <AuthConsumer>
                    {contextProps => (
                        <WrappedComponent 
                            {...contextProps}
                            {...this.props}
                        />
                    )}
                </AuthConsumer>
            );
        }
    };
}

export { AuthProvider, AuthConsumer, authHOC};