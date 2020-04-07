import { setLogin } from '../dugs/user';

const initialState = {
  isRegistered: JSON.parse(localStorage.getItem('user'))
}

const ACTIONS = {
  SET_REGISTRATION: 'SET_REGISTRATION',
  SET_REGISTRATION_SUCCESS: 'SET_REGISTRATION_SUCCESS'
}
//REDUCER
const signup = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_REGISTRATION_OK:
      return {
        ...state,
        isRegistered: action.payload
      }
    default:
      return state
  }
}

//ACTIONS
export const registration = (regData) => ({
  type: ACTIONS.SET_REGISTRATION,
  payload: regData
})

export const registrationSuccess = (regData) => ({
  type: ACTIONS.SET_REGISTRATION_SUCCESS,
  payload: !!regData
})

export const signupMiddleware = store => next => async action => {
    return next(action);
}

export default signup;