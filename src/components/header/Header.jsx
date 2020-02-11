import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {AppBar, Button, Toolbar, styled} from '@material-ui/core';
import {Logo} from 'loft-taxi-mui-theme';
import Navigation from '../navigation/Navigation';

const AppBarStyled = styled(AppBar)({
  backgroundColor: '#FFF',
  border: 0,
  boxShadow: '0 1px 4px 1px rgba(0, 0, 0, 0.11)'
});

const ToolbarStyled = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

class Header extends PureComponent {
  static propTypes = {
    changePage: PropTypes.func,
    routes: PropTypes.array,
    activePage: PropTypes.string, 
    isLoggedIn: PropTypes.bool, 
    email: PropTypes.object
  }
  static defaultProps = {
    changePage: () => {},
    routes: []
  }

  logout = () => {
    const { changePage, logout }= this.props;
    changePage('login');
    logout();
  }

  render() {
    const { changePage, routes, activePage, isLoggedIn, email } = this.props;
    if (!isLoggedIn) return null;

    return (
      <div>
        <AppBarStyled position={"static"}>
          <ToolbarStyled>
            <Logo display="flex" justifyContent="flex-start" />
            <div>
              {routes.filter(page => !['signup','login'].includes(page)).map(page =>
                <Navigation
                  key={page}
                  page = {page}
                  changePage={changePage}
                  activePage = {activePage}
                  display="flex"
                  justifyContent="flex-end"
                />
              )}
              <Button onClick={this.logout}>
                Logout
              </Button>
            </div>
          </ToolbarStyled>              
        </AppBarStyled>
      </div>
    );
  }
}

export default Header;