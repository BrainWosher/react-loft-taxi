import { apiRoot, putInLocallStarage, takeFromLocalStorage } from '../helpers/helperFunctions';

let initialData = null;

try {
  initialData = takeFromLocalStorage('user');
} catch (error) {
  initialData = null; 
}

const initialState = {
  isLogged: initialData,
}

export const ACTIONS = {
  SET_LOGIN: 'SET_LOGIN',
  SET_LOGOUT: 'SET_LOGOUT'
}

//REDUCER
const user = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOGIN: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
        isLogged: !!payload,
      }
    }
    case ACTIONS.SET_LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}
//ACTIONS 
export const setLogin = ({ token, email }) => {
  return {
    type: ACTIONS.SET_LOGIN,
    payload: {
      token,
      email
    },
  };
};

//MIDDLEWARE
//onLogin
export const login = (authData) => async (dispatch, globalStore) => {
  try {
    const store = globalStore();
    console.log('store === ', store);
    console.log('authData === ', authData);

    const body = JSON.stringify({
      email: authData.email, //"test5@test.com"
      password: authData.password, //"000000"
    });
    
    const result = await fetch(`${apiRoot}/auth`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      },
    ).then(res => res.json());

    const data = {
      token: result.token,
      email: authData.email,
    }

    dispatch(setLogin(data));

    putInLocallStarage('user', data);
  } catch(e) {
    throw new Error(e);
  }
}

export const onRegistration = (dataRegistration) => async dispatch => {
  try {
    const body = JSON.stringify({
      email: dataRegistration.email,
      password: dataRegistration.password,
      name: dataRegistration.name,
      surname: dataRegistration.surname,
    });
    const result = await fetch(`${apiRoot}/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      },
    ).then( res => res.json());

    if (!result.success) {
      // dispatch(setRegistrationError(result.error));
      return;
    }

    const data = {
      token: result.token,
      email: dataRegistration.email,
      password: dataRegistration.password,
      name: dataRegistration.name,
      surname: dataRegistration.surname
    }

    dispatch(setLogin(data));

    putInLocallStarage('user', data);
  } catch (error) {
    throw new Error(error);
  }
}

export const logout = () => ({
  type: ACTIONS.SET_LOGOUT,
  payload: false,
});

export default user;