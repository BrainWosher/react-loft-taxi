import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';
import css from './style.module.css';

class Navigation extends PureComponent {
  static propTypes = {
    page: PropTypes.string,
  };
  handleClick = () => {
    const { changePage, page } = this.props;
    changePage(page);
  };
  getActiveStyle = () => {
    if (this.props.activePage === this.props.page) {
      return css.active;
    }
    return '';
  };
  render() {
    const { page } = this.props;

    return (
      <NavItem
        handleClick={this.handleClick}
        style={this.getActiveStyle()}
        page={page}
      />
    );
  }
}

export default Navigation;