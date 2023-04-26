import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Box, Toolbar, Container, Button, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import { auth } from '../firebase_config';

const pages = [{page:'Create New', path:'/create'}, {page:'Completed Tasks', path:'/completed'}];
// const settings = ['Profile', 'Logout'];

function loggedIn() {
  if (sessionStorage.getItem('uid')) {
    return true
  } else {
    return false
  }
}

function logout() {
  auth.signOut()
  sessionStorage.removeItem('uid')
}

function Header() {

  const location = useLocation();
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar position="static" color="primary" sx={{ height: '60px' }}>
      <Container maxWidth='100%'>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            To-Do List
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box sx={{ flexGrow: 2, mx: 2, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({page, path}) => (
                <Button
                  key={page}
                  to={path}
                  href={path}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
            ))}
          </Box>

          <Box sx={{flexGrow: 0}}>
            {!loggedIn() && (
              <span>
                <Button key='Login' to='/login' href='/login' sx={{ my: 2, color: 'white', display: 'block' }}>
                  Login
                </Button>
              </span>
            )}
            {loggedIn() && (
              <span>
                <Button key='Logout' to='/' href='/' onClick={logout} sx={{ my: 2, color: 'white', display: 'block' }}>
                  Logout
                </Button>
              </span>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header;