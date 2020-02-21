import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './../App.css';
import Header from './header/Header';
import Login from './pages/login/Login';
import Map from './pages/map/Map';
import Profile from './pages/profile/Profile';
import Signup from './../components/pages/signup/Signup';
import PrivateRoute from './../components/common/PrivateRoute';
import routes from '../routes/index';
import { AuthProvider, authHOC } from '../Context/context';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect, Switch } from "react-router-dom";

const getComponents = {
  profile: Profile,
  map: Map,
  login: Login,
  signup: authHOC(Signup)
}

const HeaderComponent = authHOC(Header);

class Main extends Component {
    static propTypes = {
        changePage: PropTypes.string,
        routes: PropTypes.string,
        active: PropTypes.string
    };
    state = {
        active: 'login',
        pages: {
            list: [],
            active: null
        }
    }

    changePage = (pageId) => {
        this.setState({active: pageId});
    }

    render() {
    
    const { active } = this.state;
    return (
        <div>
            <BrowserRouter>
                <AuthProvider>
                    <HeaderComponent changePage = {this.changePage} routes= {routes} activePage = {active}/>
                    <Switch>
                        <PrivateRoute
                            path={'/profile'}
                            component={getComponents['profile']}
                        />
                        <PrivateRoute
                            path={'/map'}
                            component={getComponents['map']}
                        />
                        <Route
                            path={'/login'}
                            component={getComponents['login']}
                        />
                        <Route
                            path={'/signup'}
                            component={getComponents['signup']}
                        />
                        <Route 
                            path={'/'}
                            exact
                            component={<Redirect to={'login'}/>}
                        />
                    </Switch>
                    <Redirect to={'login'}/>
                </AuthProvider>
            </BrowserRouter>
        </div>
        );
    }
}
export default Main;