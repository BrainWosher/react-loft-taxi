const initialState = {
    isLogged: false
}

//REDUCER
const user = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN':
        return {
            ...state,
            isLogged: action.payload
        }
        default:
            return state
    }
}
//ACTIONS 
export const login = () => ({
    type: 'SET_LOGIN',
    payload: true
})

export const logout = () => ({
    type: 'SET_LOGOUT',
    payload: false
})

export default user;