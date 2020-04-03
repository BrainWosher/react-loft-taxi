import { ACTION as USER_ACTION } from './user';

let initialData = null;

try {
  initialData = JSON.parse(localStorage.getItem('profile'));
} catch (error) {
  initialData = null; 
}

const initialState = {
  isAdded: initialData,
}

const ACTION = {
  SET_PROFILE_REQUEST: 'SET_PROFILE',
  SET_PROFILE_SUCCESS: 'SET_PROFILE_SUCCESS',
  SET_PROFILE_FAILED: 'SET_PROFILE_FAILED'
}

const apiRoot = 'https://loft-taxi.glitch.me';

//REDUCER
const profile = (state = initialState, action) => {
  switch (action.type) {
    // case 'SET_PROFILE_SUCCESS': {
    //   return {
    //     ...state,
    //     isAdded: !!action.payload,
    //     ...action.payload
    //   }
    // }
    case ACTION.SET_PROFILE_SUCCESS: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
        isAdded: !!payload,
      }
    }
    case ACTION.SET_PROFILE_FAILED: {
      return initialState
    }
    case USER_ACTION.SET_LOGOUT: {
      return initialState
    }
    default:
      return state
  }
}
//ACTIONS

export const setProfile = ({ token, cardNumber, expiryDate, cardName, cvc }) => {
  return {
    type: ACTION.SET_PROFILE_SUCCESS,
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
    type: ACTION.SET_PROFILE_FAILED,
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
      console.log(result);
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
// export const add = (profileData) => ({
//   type: ACTION.SET_PROFILE_REQUEST,
//   payload: profileData
// })

// export const added = (profileData) => ({
//   type: 'SET_PROFILE_SUCCESS',
//   payload: !!profileData
// })

// export const addedFalse = () => ({
//   type: 'SET_PROFILE_FAILED',
//   payload: false
// })

// export const profileMiddleware = store => next => async action => {
//   console.log('profileMiddleware', action);
//   if (action && action.type !== ACTION.SET_PROFILE_REQUEST) {
//     return next(action);
//   }

//   try {
//     const body = JSON.stringify({
//       cardNumber: action.payload.cardNumber,//"2000 0000 0000 0000",
//       expiryDate: action.payload.expiryDate,//"01/22",
//       cardName: action.payload.cardName,//"TEST",
//       cvc: action.payload.cvc,//"910"
//     });
//     const result = await fetch('https://loft-taxi.glitch.me/card',
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body
//       }
//     ).then(res => res.json());
//     console.log(result);
//     const data = {
//       token: result.token,
//       cardNumber: action.payload.cardNumber,
//       expiryDate: action.payload.expiryDate,
//       cardName: action.payload.cardName,
//       cvc: action.payload.cvc,
//     }
//     store.dispatch(added(data));
//     localStorage.setItem('profile', JSON.stringify(data));
//   } catch (e) {
//     throw new Error(e);
//   }
//   return next(action);
// }

export default profile;