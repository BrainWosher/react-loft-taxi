import { combineReducers } from 'redux';
import user from '../dugs/user';
import signup from '../dugs/signup';
import profile from '../dugs/profile';

const rootReducer = combineReducers({
  user, 
  signup,
  profile,
})

export default rootReducer;