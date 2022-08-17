import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Menu, Container, Avatar, MenuItem, Link, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';

export const MenuApp = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const pages = ['MÍDIA', 'AGENDA', 'BIOGRAFIA', 'VIDEOTECA', 'FOTOS', 'NOVIDADES', 'CONTATO'];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#e6c5ad', padding: '10px 0 10px 0' }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Link href="/" underline="none">
            <Avatar alt="logotipo" src={logo} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end'}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    key={page}
                    href={`#${page}`}
                    fontWeight="700"
                    fontStyle="italic"
                    fontFamily="Poppins"
                    sx={{ m: 2, color: 'black', display: 'block', textDecoration: 'none', ':hover': {color: '#9e3838'} }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Link
                key={page}
                href={`#${page}`}
                fontWeight="700"
                fontStyle="italic"
                fontFamily="Poppins"
                sx={{ m: 2, color: '#1d1513', display: 'block', textDecoration: 'none', ':hover': {color: '#9e3838'} }}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0, mr: '1rem' }}>
            <Stack direction="row" spacing={1}>
              <Link href="https://www.instagram.com/bandapegada7oficial/" underline="none">
                <Avatar alt="instagram" src={instagram} />
              </Link>
              <Link href="https://www.youtube.com/channel/UCjIgsW7rChSLXwgCnbbXmFw" underline="none">
                <Avatar alt="youtube" src={youtube} />
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};