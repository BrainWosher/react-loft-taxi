import React from 'react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux'

import rootReducer from './store/store'
import Main from './components/Main';
import './App.css';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const store = createStore(rootReducer, composeEnhancers());

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