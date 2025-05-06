// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import ExchangeRates from './pages/ExchangeRates';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import { useThemeContext } from './context/ThemeContext';

const MainLayout = () => {
  const { darkMode, toggleTheme } = useThemeContext();

  return (
    <>
      <Header darkMode={darkMode} handleThemeToggle={toggleTheme} />
      <Outlet />
    </>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/exchange" element={<ExchangeRates />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);

export default App;
