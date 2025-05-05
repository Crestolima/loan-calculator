import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import ExchangeRates from './pages/ExchangeRates';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  // Create the theme inside the component to ensure it updates when darkMode changes
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
        <Header darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exchange" element={<ExchangeRates />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;