import React from 'react';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore,compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import rootReducer from './store/store'
import {userMiddleware} from './dugs/user'
import Main from './components/Main';
import './App.css';

// const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(
      userMiddleware,
      logger
    )
  ),
  // composeEnhancers()
);
// window.store = store;
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