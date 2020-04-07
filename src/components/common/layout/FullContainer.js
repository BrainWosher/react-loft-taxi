import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import loftTaxiImage from '../../../asstets/login-background.jpg';
import { flex, bgImage } from 'helpers/styles';

const useStyles = makeStyles({
  root: {
    ...flex('center'),
    ...bgImage(loftTaxiImage),
    height: '100vh',
    padding: 0,
    backgroundSize: 'cover',
    borderRadius: 0
  },
});

const FullContainer = ({children}) => {
  const classes = useStyles();
  return (<Paper className={classes.root} data-testid="login-layout">{children}</Paper>);
}
export default FullContainer;