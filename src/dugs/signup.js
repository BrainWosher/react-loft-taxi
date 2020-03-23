import { loginOk } from '../dugs/user';

const initialState = {
  isRegistered: JSON.parse(localStorage.getItem('user'))
}

const ACTION = {
  SET_REGISTRATION: 'SET_REGISTRATION'
}
//REDUCER
const signup = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGISTRATION_OK':
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
  type: 'SET_REGISTRATION',
  payload: regData
})

export const registrationSuccess = (regData) => ({
  type: 'SET_REGISTRATION_SUCCESS',
  payload: !!regData
})

export const signupMiddleware = store => next => async action => {
  if (!Object.keys(ACTION).includes(action.type)) {
    return next(action);
  }
  try {
    const body = JSON.stringify({
      "email": action.payload.email,//"test5@test.com"
      "password": action.payload.password,//"000000"
      "name": action.payload.name,//"NAME"
      "surname": action.payload.surname//"SURNAME"
    })
    const result = await fetch('https://loft-taxi.glitch.me/register',
      {
        method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body
      }
    ).then(res => res.json());
    console.log(result);
    const data = {
      token: result.token,
      email: action.payload.email,
      password: action.payload.password,
      name: action.payload.name,
      surname: action.payload.surname
    }

    store.dispatch(loginOk(data));
    // localStorage.setItem('regData', JSON.stringify(data));
    localStorage.setItem('user',JSON.stringify(data));
  } catch (e) {
    throw new Error(e);
  }
  return next(action);
}

export default signup;