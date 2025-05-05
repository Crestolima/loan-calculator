import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // blue for buttons and navbar
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5', // light cards/background
    },
    text: {
      primary: '#000000',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // light blue accent in dark mode
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
    },
  },
});
