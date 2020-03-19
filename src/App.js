import React from 'react';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './store/store'
import {userMiddleware, auth } from './dugs/user'
import Main from './components/Main';
import './App.css';
import { signupMiddleware } from './dugs/signup';
import { profileMiddleware } from './dugs/profile';

// const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(
    applyMiddleware(
      // auth,
      userMiddleware,
      signupMiddleware,
      profileMiddleware,
      // thunk,
      logger
    )
  ),
  // composeEnhancers()
);
window.store = store;
function App() {
  return (
    <div className="App" data-testid={'app-component'} >
        <Provider store={store}>
          <Main />
        </Provider>
    </div>
  );
}

export default App;