import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Link from './Link'

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.light,
    borderTop: `8px solid ${theme.palette.primary.light}`,
  },
  appBarBorder: {
    borderTop: `4px solid ${theme.palette.primary.dark}`,
    paddingBottom: '4px',
  },
  root: {
    flexGrow: 1,
  },
  logo: {
    color: theme.palette.primary.dark,
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
        elevation={1}
        position="fixed"
      >
        <div className={classes.appBarBorder}>
          <Toolbar variant="dense">
            <Link className={classes.logo} href="/" variant="h5">
              Townvisor
            </Link>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  )
}
