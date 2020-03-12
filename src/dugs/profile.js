const initialState = {
  isAdded: JSON.parse(localStorage.getItem('profile'))
}

const ACTION = {
  SET_PROFILE_REQUEST: 'SET_PROFILE',
  SET_PROFILE_SUCCESS: 'SET_PROFILE_SUCCESS',
  SET_PROFILE_FAILED: 'SET_PROFILE_FAILED'
}

//REDUCER
const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROFILE_SUCCESS':
      return {
        ...state,
        isAdded: action.payload
      }
      case 'SET_PROFILE_FAILED': {
        return initialState
    }
      default:
        return state
  }
}
//ACTIONS
export const add = (profileData) => ({
  type: 'SET_PROFILE',
  payload: profileData
})

export const added = (profileData) => ({
  type: 'SET_PROFILE_SUCCESS',
  payload: !!profileData
})

export const addedFalse = () => ({
  type: 'SET_PROFILE_FAILED',
  payload: false
})

export const profileMiddleware = store => next => async action => {
  console.log('profileMiddleware', action);
  if (!Object.keys(ACTION).filter(key => key !== 'SET_PROFILE_FAILED').includes(action.type)) {
    return next(action);
  }

  try {
    const body = JSON.stringify({
      "cardNumber": action.payload.cardNumber,//"2000 0000 0000 0000",
      "expiryDate": action.payload.expiryDate,//"01/22",
      "cardName": action.payload.cardName,//"TEST",
      "cvc": action.payload.cvc,//"910"
      // "token": AUTH_TOKEN
    });
    const result = await fetch('https://loft-taxi.glitch.me/card',
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
      cardNumber: action.payload.cardNumber,
      expiryDate: action.payload.expiryDate,
      cardName: action.payload.cardName,
      cvc: action.payload.cvc,
    }
    store.dispatch(added(data));
    localStorage.setItem('profile', JSON.stringify(data));
  } catch (e) {
    throw new Error(e);
  }
  return next(action);
}

export default profile;