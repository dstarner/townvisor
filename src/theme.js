import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes'

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow:
          '0px 1px 3px 0px rgba(0,0,0,0.1),0px 1px 1px 0px rgba(0,0,0,0.07),0px 2px 1px -1px rgba(0,0,0,0.06)',
      },
      rounded: {
        borderRadius: '10px',
      },
    },
  },
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
    background: {
      default: '#f9f9f9',
    },
    primary: {
      main: '#000000',
      dark: '#000000',
      light: '#ffffff',
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
