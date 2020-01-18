import React from 'react';
import './App.css';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import MapPage from './components/MapPage';
import ProfilePage from './components/ProfilePage';
import SignupPage from './components/SignupPage';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <ProfilePage/>
      <MapPage/>
      <LoginPage/>
      <SignupPage/>
    </div>
  );
}

export default App;
