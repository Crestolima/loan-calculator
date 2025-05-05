import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import ExchangeRates from './pages/ExchangeRates';
import ErrorPage from './pages/ErrorPage';

const AppContent = ({ darkMode, handleThemeToggle }) => {
  const location = useLocation();

  const hideHeaderRoutes = ['*', '/404']; // List of routes where Header should be hidden
  const isErrorPage = location.pathname === '*' || location.pathname === '/404';

  return (
    <>
      {!isErrorPage && (
        <Header darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exchange" element={<ExchangeRates />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: darkMode ? '#90caf9' : '#1976d2',
        },
        background: {
          default: darkMode ? '#121212' : '#ffffff',
          paper: darkMode ? '#1e1e1e' : '',
        },
        text: {
          primary: darkMode ? '#ffffff' : '#000000',
        },
      },
    }), [darkMode]);

  const handleThemeToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppContent darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
      </Router>
    </ThemeProvider>
  );
};

export default App;
