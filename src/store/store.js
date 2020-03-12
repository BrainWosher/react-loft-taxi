import { combineReducers } from 'redux';
import user from '../dugs/user';
import signup from '../dugs/signup';
import profile from '../dugs/profile';

export default combineReducers({
  user, 
  signup,
  profile,
})