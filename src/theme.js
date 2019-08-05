import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import responsiveFontSizes from '@material-ui/core/styles/responsiveFontSizes'

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: '16px',
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
