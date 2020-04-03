let initialData = null;

try {
  initialData = JSON.parse(localStorage.getItem('user'));
} catch (e) {
  initialData = null;
}

const initialState = {
  isLogged: initialData,
};

const ACTION = {
  SET_LOGIN: 'SET_LOGIN',
  SET_LOGOUT: 'SET_LOGOUT',
};

//REDUCER
const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGIN_OK':
      return {
        ...state,
        isLogged: action.payload,
      };
    case 'SET_LOGOUT': {
      return initialState;
    }
    default:
      return state;
  }
};
//ACTIONS
export const login = (authData) => ({
  type: 'SET_LOGIN',
  payload: authData,
});

export const loginOk = (authData) => ({
  type: 'SET_LOGIN_OK',
  payload: !!authData,
});

export const logout = () => ({
  type: 'SET_LOGOUT',
  payload: false,
});

export default user;