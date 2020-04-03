const initialState = {
  isLogged: JSON.parse(localStorage.getItem('user'))
}

export const ACTION = {
  SET_LOGIN: 'SET_LOGIN',
  SET_LOGOUT: 'SET_LOGOUT'
}

const apiRoot = 'https://loft-taxi.glitch.me'; //`${apiRoot}/auth`

//REDUCER
const user = (state = initialState, action) => {
  switch (action.type) {
    // case 'SET_LOGIN_OK':
    // return {
    //   ...state,
    //   isLogged: action.payload
    // }
    case ACTION.SET_LOGIN: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
        isLogged: !!payload,
      }
    }
    case ACTION.SET_LOGOUT: {
      return initialState;
    }
    default:
      return state;
  }
}
//ACTIONS 
export const setLogin = ({ token, email }) => {
  return {
    type: ACTION.SET_LOGIN,
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

    localStorage.setItem('user', JSON.stringify(data));
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

    console.log(result);
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

    localStorage.setItem('user', JSON.stringify(data));
  } catch (error) {
    throw new Error(error);
  }
}

export const logout = () => ({
  type: ACTION.SET_LOGOUT,
  payload: false,
});
// export const auth = (req) => async dispatch => {
//   try {
//     const body = JSON.stringify({
//       "email": req.email, //'test5@test.com',///
//       "password": req.password // '000000',//
//     });
//     const result = await fetch('https://loft-taxi.glitch.me/auth',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body
//       }
//     ).then(res => res.json());

//     const data = {token: result.token, email: req.email};

//     store.dispatch(loginOk(data));
//     localStorage.setItem('user', JSON.stringify(data))
//   } catch (e) {
//     throw new Error(e);
//   }
// }

// export const userMiddleware = store => next =>async action => {
//   console.log('userMiddleware', action);
//   if (!Object.keys(ACTION).filter(key => key !== 'SET_LOGOUT').includes(action.type)) {
//     return next(action);
//   }

//   try {
//     let status = response => {
//       if (response.status !== 200 ){
//         return Promise.reject(new Error(response.statusText))
//       }
//       return Promise.resolve(response);
//     };
//     const body = JSON.stringify({
//       "email": action.payload.email, //"test5@test.com"
//       "password": action.payload.password //"000000"
//     });

//     const result = await fetch('https://loft-taxi.glitch.me/auth',
//       {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body
//       }
//     ).then(status)
//     .then(res => res.json());
//     console.log(result);
//     const data = {
//       token: result.token,
//       email: action.payload.email
//     };
//     store.dispatch(loginOk(data));
//     localStorage.setItem('user',JSON.stringify(data));
//   } catch (e) {
//     console.log('error', e );
//   }
//   return next(action);
// }

export default user;