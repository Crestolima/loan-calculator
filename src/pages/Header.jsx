import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Switch,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, handleThemeToggle }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'EXCHANGE RATES (LIVE)', path: '/exchange' },
    { label: 'ABOUT', path: '/about' },
    { label: 'ERROR PAGE', path: '/error' },
  ];

  const drawer = (
    <Box sx={{ width: 250 }} onClick={() => setDrawerOpen(false)}>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.label} component={Link} to={item.path}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ mr: 1 }}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography>
            <Switch
              checked={darkMode}
              onChange={handleThemeToggle}
              color="primary"
            />
          </Box>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} color="inherit">
          Loan Calculator
        </Typography>

        {isMobile ? (
          <>
            <IconButton 
              edge="end" 
              color="inherit" 
              onClick={() => setDrawerOpen(true)}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                variant={item.label === 'HOME' ? 'outlined' : 'text'}
                sx={{ color: theme.palette.text.primary }}
              >
                {item.label}
              </Button>
            ))}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Switch
                checked={darkMode}
                onChange={handleThemeToggle}
                color="primary"
              />
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;