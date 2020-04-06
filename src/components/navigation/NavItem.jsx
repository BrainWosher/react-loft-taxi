import React from 'react';
import {useHistory} from "react-router-dom";
import Button from '@material-ui/core/Button';

const NavItem = ({page, handleClick, styles}) => {
  const history = useHistory();
  const click = () => {
      history.push(`/${page}`);
      handleClick();
  }
  return <Button onClick= {click} className={styles}>
      { page }
  </Button>
}
export default NavItem;