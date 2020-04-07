import { ACTIONS as USER_ACTIONS } from './user';

let initialData = null;

try {
  initialData = JSON.parse(localStorage.getItem('profile'));
} catch (error) {
  initialData = null; 
}

const initialState = {
  isAdded: initialData,
}

const ACTIONS = {
  SET_PROFILE_REQUEST: 'SET_PROFILE',
  SET_PROFILE_SUCCESS: 'SET_PROFILE_SUCCESS',
  SET_PROFILE_FAILED: 'SET_PROFILE_FAILED'
}

const apiRoot = 'https://loft-taxi.glitch.me';

//REDUCER
const profile = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_PROFILE_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
        isAdded: !!payload,
      }
    }
    case ACTIONS.SET_PROFILE_FAILED: {
      return initialState
    }
    case USER_ACTIONS.SET_LOGOUT: {
      return initialState
    }
    default:
      return state
  }
}
//ACTIONS

export const setProfile = ({ token, cardNumber, expiryDate, cardName, cvc }) => {
  return {
    type: ACTIONS.SET_PROFILE_SUCCESS,
    payload: {
      token,
      cardNumber,
      expiryDate,
      cardName,
      cvc
    },
  }
}

export const failed = ({ error }) => {
  return {
    type: ACTIONS.SET_PROFILE_FAILED,
    payload: {
      error,
    },
  }
}

//middleware
export const onProfile = (profileData) => async (dispatch, globalStore) => {
  try {
    const store = globalStore();
    console.log('store === ', store);
    console.log('profileData === ', profileData);

    const body = JSON.stringify({
      cardNumber: profileData.cardNumber,//"2000 0000 0000 0000",
      expiryDate: profileData.expiryDate,//"01/22",
      cardName: profileData.cardName,//"TEST",
      cvc: profileData.cvc,//"910"
    });

    const result = await fetch(`${apiRoot}/card`,
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
      cardNumber: profileData.cardNumber,
      expiryDate: profileData.expiryDate,
      cardName: profileData.cardName,
      cvc: profileData.cvc,
    }

    dispatch(setProfile(data));

    localStorage.setItem('profile', JSON.stringify(data));
  } catch(error) {
    dispatch(failed(error));
  }
}

export default profile;