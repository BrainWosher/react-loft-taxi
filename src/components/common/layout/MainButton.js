import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '40px',
  },
});

const MainButton = ({children}) => {
  const classes = useStyles();
  return (<Button className={classes.root} type="submit" data-testid="submit" color="primary" variant="contained">{children}</Button>);
}
export default MainButton;