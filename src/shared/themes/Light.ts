import { createTheme } from '@mui/material';

const brand = {
  wine: '#9e3838',
  wineDark: '#7a2b2b',
  wineLight: '#c45a5a',
  sand: '#c9a88c',
  sandMuted: '#e8ddd4',
  ink: '#1a1412',
  inkSoft: '#3d3633',
  cream: '#faf6f2',
  paper: '#ffffff',
};

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand.wine,
      dark: brand.wineDark,
      light: brand.wineLight,
      contrastText: '#ffffff',
    },
    secondary: {
      main: brand.sand,
      dark: '#a8896e',
      light: brand.sandMuted,
      contrastText: brand.ink,
    },
    background: {
      default: brand.cream,
      paper: brand.paper,
    },
    text: {
      primary: brand.ink,
      secondary: brand.inkSoft,
    },
    divider: 'rgba(26, 20, 18, 0.08)',
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica Neue", sans-serif',
    h1: {
      fontFamily: '"Outfit", "Poppins", sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: '"Outfit", "Poppins", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});
