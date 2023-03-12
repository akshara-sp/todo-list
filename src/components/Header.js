import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu } from '@mui/material';
import { Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import Divider from '@mui/material/Divider';
import {RouterLink, withRouter} from 'react-router-dom'

const pages = [{page:'Create New', path:'/create'}, {page:'Completed Tasks', path:'/completed'}];
const settings = ['Profile', 'Logout'];

const Header = withRouter(({history}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
    <AppBar position="static" color="primary">
      <Container maxWidth='xl'>
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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
})

export default Header;


/* const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <span>To-Do List</span>
            </div>
            <div className="header__subtitle">
                <span>Create New</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder='Search in To-Do List' />
                </div>
            </div>
            <div className="header__icons">
                <Avatar className="header__iconsAvatar"/>
                <ExitToAppIcon className='header__iconsLogout' fontSize='large'/>
            </div>
        </div>
    )
}
export default Header */