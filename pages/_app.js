require('es6-promise').polyfill()
import React from 'react'
import App, {Container} from 'next/app'
import Head from 'next/head'
import Toolbar from '@material-ui/core/Toolbar'
import {ThemeProvider} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import PageHeader from '../components/PageHeader'
import theme from '../theme'

class MaterialApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const {Component, pageProps} = this.props

    return (
      <Container>
        <Head>
          <title>Townvisor</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <PageHeader />
          <Toolbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MaterialApp
