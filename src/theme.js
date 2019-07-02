import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Helvetica',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '4rem',
    },
    h2: {
      fontSize: '3.4rem',
    },
    h3: {
      fontSize: '2.8rem',
    },
    h4: {
      fontSize: '2.4rem',
    },
    h5: {
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1.5rem',
    },
  },
  palette: {
    primary: {
      main: '#2cb5e8',
    },
    secondary: {
      main: '#1fc8db',
    },
    text: {
      white: '#FFFFFF',
    },
  },
})

export default responsiveFontSizes(theme)
