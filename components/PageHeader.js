import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#ffffff',
    borderTop: '8px solid #ffffff',
  },
  appBarBorder: {
    borderTop: '4px solid #000000',
    paddingBottom: '4px',
  },
  root: {
    flexGrow: 1,
    // marginBottom: '85px', // AppBar height is 67px, with 18px of spacing.
  },
  logo: {
    fontWeight: theme.typography.fontWeightBold,
  },
}))

export default function PageHeader() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.appBar}
        color="inherit"
        elevation={0}
        position="fixed"
      >
        <div className={classes.appBarBorder}>
          <Toolbar variant="dense">
            <Typography className={classes.logo} color="inherit" variant="h5">
              Townvisor
            </Typography>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  )
}
