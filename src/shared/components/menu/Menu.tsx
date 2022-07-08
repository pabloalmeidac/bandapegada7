import * as React from 'react';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, MenuItem, Link, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/logo.svg';
import facebook from '../../assets/facebook.svg';
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
    <AppBar position="static" >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Link href="/" underline="none">
            <Avatar alt="logotipo" src={logo} />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Link
                key={page}
                href="/"
                fontWeight="700"
                fontFamily="Sans-serif"
                sx={{ m: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0, mr: '1rem' }}>
            <Stack direction="row" spacing={1}>
              <Link href="https://www.instagram.com/bandapegada7oficial/" underline="none">
                <Avatar alt="facebook" src={facebook} />
              </Link>
              <Link href="" underline="none">
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