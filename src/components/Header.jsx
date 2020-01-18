import React from 'react';



class Header extends React.Component {
    render() {
      return (
        <div className="header">
            <div className="logo">
                <div className="logo__image"></div>
                <div className="logo__text"></div>
            </div>
            <ul className="list">
                <li className="list__item"><a href="/profilepage">Profile</a></li>
                <li className="list__item"><a href="/mappage">Map</a></li>
                <li className="list__item"><a href="/loginlage">Login</a></li>
                <li className="list__item"><a href="/signuppage">Signup</a></li>
            </ul>
        </div>
        );
    }
  }

export default Header;