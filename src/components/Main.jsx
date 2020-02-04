import React, {Component} from 'react';
import './../App.css';
import Header from './header/Header';
import Login from './../components/pages/Login';
import Map from './../components/pages/Map';
import Profile from './../components/pages/Profile';
import Signup from './../components/pages/Signup';
import {routes} from './../helpers/routes';

const getComponents = {
  profile: Profile,
  map: Map,
  login: Login,
  signup: Signup
}

class Main extends Component {
    state = {
        active: 'login',
        pages: {
            list: [],
            active: null
        },
        isLoggedIn: false
    }

    changePage = (pageId) => {
        this.setState({active: pageId});
    }

    changeLoggedStatus= () => {
        this.setState(state => {
            return !state.isLoggedIn;
        })
    }
    
    render() {
    
    const { active } = this.state;
    const C = getComponents[active] || Login;

    return (
        <div>
            <div>
                <Header changePage = {this.changePage} routes= {routes} activePage = {active}  authorizationStatus = {this.changeLoggedStatus}/>
                    <C changePage = {this.changePage}/>
            </div>
        </div>
    );
    }
}
export default Main;