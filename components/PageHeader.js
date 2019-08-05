import React from 'react'
import NextLink from 'next/link'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

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
            <NextLink>
              <Link classes={{root: classes.logo}} href="/" variant="h5">
                Townvisor
              </Link>
            </NextLink>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  )
}
