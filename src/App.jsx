// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import ExchangeRates from './pages/ExchangeRates';
import ErrorPage from './pages/ErrorPage';
import { useThemeContext } from './context/ThemeContext';
import About from './pages/About';

const AppContent = () => {
  const location = useLocation();
  const { darkMode, toggleTheme } = useThemeContext();

  const isErrorPage = location.pathname === '*' || location.pathname === '/404';

  return (
    <>
      {!isErrorPage && (
        <Header darkMode={darkMode} handleThemeToggle={toggleTheme} />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exchange" element={<ExchangeRates />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
