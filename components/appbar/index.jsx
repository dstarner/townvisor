import React from 'react';

import { Toolbar } from '@material-ui/core';

import ElevatedScrollbar from './elevation'
import AppBar from './bar'

export default class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ElevatedScrollbar>
          <AppBar />
        </ElevatedScrollbar>
        <Toolbar style={{marginBottom: '1rem'}}/>
      </React.Fragment>
    )
  }
}