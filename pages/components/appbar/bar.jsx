import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Link from '../link';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#1fc8db', 
    backgroundImage: 'linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
  },
  logo: {
    height: '40px'
  },
  brand: {
    flexGrow: 1,
  },
  brandText: {
    marginLeft: theme.spacing(1),
    color: theme.palette.text.white,
  }
}))

const NavigationBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} color="default">
      <Toolbar>
        {/* <div className={classes.brand}> */}
          <Link href='/' underline='none' className={classes.brand}>
            <Toolbar >
              <img className={classes.logo} src="/static/images/logo.svg" />
              <Typography className={classes.brandText} variant='h4'>Townvisor</Typography>
            </Toolbar>
          </Link>      
        {/* </div> */}
      </Toolbar>
    </AppBar>
  )
}

export default NavigationBar;