import React, { createContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Tema değiştirme fonksiyonu sağlayan context
const ColorModeContext = createContext({ toggleColorMode: () => {} });

const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: '#c12a8c' },
          secondary: { main: '#6a1b9a' },
          background: {
            default: mode === 'light' ? '#ffffff' : '#1e1e1e',
            paper: mode === 'light' ? '#f9f9f9' : '#2c2c2c',
          },
          text: {
            primary: mode === 'light' ? '#222' : '#f5f5f5',
            secondary: mode === 'light' ? '#666' : '#aaa',
          },
        },
        typography: {
          fontFamily: 'Poppins, Roboto, sans-serif',
          h1: { fontWeight: 700, fontSize: '3rem' },
          h2: { fontWeight: 600, fontSize: '2.25rem' },
          h3: { fontWeight: 600, fontSize: '1.75rem' },
          body1: {
            fontSize: '1rem',
            color: mode === 'light' ? '#444' : '#ccc',
            lineHeight: 1.6,
          },
          body2: {
            fontSize: '0.875rem',
            color: mode === 'light' ? '#666' : '#aaa',
          },
          button: {
            fontWeight: 600,
            textTransform: 'none',
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 10,
                fontWeight: 600,
                padding: '8px 20px',
                transition: 'all 0.3s ease',
              },
              contained: {
  color: '#fff',
  backgroundColor: '#c12a8c',
  '&:hover': {
    backgroundColor: '#a02072',
  },
  '&:active': {
    backgroundColor: '#88175e',
  },
},

              outlined: {
                color: '#c12a8c',
                borderColor: '#c12a8c',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: '#fce4ec',
                  borderColor: '#e09bc1',
                  color: '#c12a8c',
                },
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                transition: 'color 0.3s ease',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { ColorModeContext };
export default ThemeContextProvider;
