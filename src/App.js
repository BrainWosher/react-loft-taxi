import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';
import SignupPage from './components/SignupPage';

const PAGES = {
  profile: () => <ProfilePage/>,
  map: () => <MapPage/>,
  signup: setPage => <SignupPage setPage={setPage} />,
  login: setPage => <LoginPage setPage={setPage} />
}

const App = () => {
  const [page, setPage] = React.useState("login");
  return (
    <div className="App">
      <Header setPage={setPage} />
      {PAGES[page](setPage)}
    </div>
  );
}

export default App;
