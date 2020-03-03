const initialState = {
    isLogged: JSON.parse(localStorage.getItem('user'))
}

const ACTION = {
    SET_LOGIN: 'SET_LOGIN',
    SET_LOGOUT: 'SET_LOGOUT'
}

//REDUCER
const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_OK':
        return {
            ...state,
            isLogged: action.payload
        }
        default:
            return state
    }
}
//ACTIONS 
export const login = (authData) => ({
    type: 'SET_LOGIN',
    payload: authData
})

export const loginOk = (authData) => ({
    type: 'SET_LOGIN_OK',
    payload: !!authData
})

export const logout = () => ({
    type: 'SET_LOGOUT',
    payload: false
})

export const userMiddleware = store => next =>async action => {
    if (!Object.keys(ACTION).includes(action.type)) {
        return next(action);
    }

    try {
        const body = JSON.stringify({
            "email": action.payload.email, //"test5@test.com"
            "password": action.payload.password //"000000"
        });

        const result = await fetch('https://loft-taxi.glitch.me/auth',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            }
        ).then(res => res.json());
        console.log(result);
        const data = {token: result.token, email: action.payload.email};
        store.dispatch(loginOk(data));
        localStorage.setItem('user',JSON.stringify(data));
    } catch (e) {
        throw new Error(e);
    }
    return next(action);
}

export default user;