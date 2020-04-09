import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './../App.css';
import Header from './header/Header';
import PrivateRoute from './../components/common/PrivateRoute';
import routes from '../routes/index';
import { logout } from '../dugs/user';

const Login = lazy(()=> import('./pages/login/Login'));
const Map = lazy(()=> import('./pages/map/Map'));
const Profile = lazy(()=> import('./pages/profile/Profile'));
const Signup = lazy(()=> import('./pages/signup/Signup'));

class Main extends Component {
  static propTypes = {
    changePage: PropTypes.string,
    routes: PropTypes.string,
    active: PropTypes.string,
  };
  state = {
    active: 'login',
    pages: {
      list: [],
      active: null,
    },
  };

  changePage = pageId => {
    this.setState({ active: pageId });
  };

  render() {
    const { active } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Header
            changePage={this.changePage}
            routes={routes}
            activePage={active}
            isLoggedIn={this.props.isAuth}
            logout={this.props.logout}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <PrivateRoute path={'/profile'} component={Profile}/>
              <PrivateRoute path={'/map'} component={Map} />
              <Route path={'/login'} component={Login} />
              <Route path={'/signup'} component={Signup} />
            </Switch>
          </Suspense>
          <Redirect to={this.props.isAuth ? 'map' : 'login'} />
        </BrowserRouter>
      </div>
    );
  }
}
export default connect(store => ({
  isAuth: store.user.isLogged,
}),{ logout })(Main);