import React from 'react';
// import {Provider} from 'react-redux';

// import store from './store/store';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App" data-testid={'app-component'} >
        {/* <Provider store={store()}> */}
          <Main />
        {/* </Provider> */}
    </div>
  );
}

export default App;