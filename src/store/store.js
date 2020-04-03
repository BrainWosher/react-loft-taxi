import { createStore,compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers'
import { signupMiddleware } from '../dugs/signup';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(
    applyMiddleware(
      signupMiddleware,
      thunk,
      logger
    )
  ),
);

export default store;