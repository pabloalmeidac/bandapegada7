import { createTheme } from '@mui/material';
import { cyan } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#1d1513',
      dark: '#6a1010',
      light: '#1d1513',
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    info: {
      main: '#ffffff',
      dark: '#ffffff',
      light: '#ffffff',
      contrastText: '#000000',
    },
    background: {
      default: '#f7f6f3',
      paper: '#ffffff',
    },
  }
});