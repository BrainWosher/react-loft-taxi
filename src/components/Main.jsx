import React, {Component} from 'react';
import './../App.css';
import Header from './header/Header';
import Login from './pages/login/Login';
import Map from './../components/pages/Map';
import Profile from './pages/profile/Profile';
import Signup from './../components/pages/signup/Signup';
import {routes} from './../helpers/routes';
import { AuthProvider, authHOC } from '../Context/context';

const getComponents = {
  profile: Profile,
  map: Map,
  login: Login,
  signup: authHOC(Signup)
}

const HeaderComponent = authHOC(Header);

class Main extends Component {
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
    const C = getComponents[active] || Login;

    return (
        <div>
            <div>
                <AuthProvider>
                    <HeaderComponent changePage = {this.changePage} routes= {routes} activePage = {active}/>                           
                    <C changePage = {this.changePage}/>
                </AuthProvider>
            </div>
        </div>
        );
    }
}
export default Main;