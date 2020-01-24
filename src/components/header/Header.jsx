import React, {PureComponent} from 'react';
import Navigation from '../navigation/Navigation';


class Header extends PureComponent {
  static defaultProps = {
    changePage: () => {},
    routes: []
  }
    render() {
      const { changePage, routes, activePage } = this.props;
      return (
        <div>
          {routes.map(page =>
            <Navigation
              key={page}
              page = {page}
              changePage={changePage}
              activePage = {activePage}
            />
            )
          }
        </div>
      
      );
    }
  }

export default Header;