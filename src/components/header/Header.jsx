import React, {PureComponent} from 'react';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
  static defaultProps = {
    changePage: () => {},
    routes: []
  }
    render() {
      const { changePage, routes, activePage } = this.props;
      return (
        <div>
          <AppBarStyled position={"static"}>
            <ToolbarStyled>
              <Logo display="flex" justifyContent="flex-start" />
              <div>
                {routes.map(page =>
                  <Navigation
                    key={page}
                    page = {page}
                    changePage={changePage}
                    activePage = {activePage}
                    display="flex"
                    justifyContent="flex-end"
                  />
                )}
              </div>
            </ToolbarStyled>
          </AppBarStyled>
        </div>
      );
    }
  }

export default Header;