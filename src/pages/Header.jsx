import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Switch, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

// Create styled Link component to override default link styling
const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
  '&:visited': {
    color: 'inherit',
  },
}));

// Create styled nav link for desktop view
const NavLink = styled(RouterLink)(({ theme }) => ({
  color: '#fff',
  textDecoration: 'none',
  padding: '8px 16px',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
}));

const Header = ({ darkMode, handleThemeToggle }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'EXCHANGE RATES (LIVE)', path: '/exchange' },
    { label: 'ABOUT', path: '/about' },
    { label: 'ERROR PAGE', path: '*' },
  ];

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: darkMode ? '#333' : '#1976d2', 
          color: '#fff', 
          boxShadow: 'none'
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3 } }}>
          <Toolbar disableGutters>
            {/* Mobile View */}
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ marginRight: 1 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontFamily: 'cursive',
                    fontWeight: 'normal',
                    fontSize: '1.25rem'
                  }}
                >
                  Loan Calculator
                </Typography>
              </>
            ) : (
              /* Desktop View - UPDATED */
              <>
                {/* Desktop layout matching the image */}
                {/* Left side: Loan Calculator title */}
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: 'cursive',
                    fontWeight: 'normal',
                    fontSize: '1.25rem',
                  }}
                >
                  Loan Calculator
                </Typography>
                
                {/* Force right alignment for nav items and switch */}
                <Box sx={{ flexGrow: 1 }} />
                
                {/* Right side: Navigation items with minimal spacing */}
                <Box sx={{ display: 'flex' }}>
                  {navItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      sx={{
                        px: 1.5,
                        mx: 0.5,
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </Box>
              </>
            )}
            <Switch checked={darkMode} onChange={handleThemeToggle} color="default" />
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            width: '80%',
            maxWidth: 300,
            boxSizing: 'border-box',
            backgroundColor: darkMode ? '#222' : '#fff',
            color: darkMode ? '#fff' : '#000'
          },
        }}
      >
        <Box sx={{ p: 2, height: '100%' }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  borderBottom: '1px solid rgba(0,0,0,0.1)',
                  py: 1.5,
                  color: darkMode ? '#fff' : '#000',
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
                  }
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontFamily: 'cursive',
                    fontSize: '1.1rem',
                    fontWeight: item.label === 'HOME' ? 'bold' : 'normal',
                    color: 'inherit'
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;