import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  Container,
  Avatar,
  MenuItem,
  Link,
  Stack,
} from '@mui/material';
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

  const linkSx = {
    m: { xs: 0, md: 1.25 },
    px: { md: 0.5 },
    py: 0.5,
    color: 'rgba(255,255,255,0.88)',
    display: 'block',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.8125rem',
    letterSpacing: '0.06em',
    fontFamily: '"Outfit", "Poppins", sans-serif',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: 'primary.light',
    },
  } as const;

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'linear-gradient(180deg, rgba(26,20,18,0.97) 0%, rgba(26,20,18,0.92) 100%)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        py: 0.75,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 }, gap: 2 }}>
          <Link href="/" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt="logotipo"
              src={logo}
              variant="rounded"
              sx={{
                width: { xs: 44, md: 52 },
                height: { xs: 44, md: 52 },
                bgcolor: 'transparent',
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
              }}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
            }}
          >
            <IconButton
              size="large"
              aria-label="abrir menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'common.white' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                elevation: 8,
                sx: {
                  mt: 1,
                  minWidth: 220,
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                },
              }}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ py: 0.5 }}>
                  <Link
                    href={`#${page}`}
                    sx={{
                      ...linkSx,
                      color: 'text.primary',
                      width: '100%',
                      m: 0,
                      py: 1,
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {pages.map((page) => (
              <Link key={page} href={`#${page}`} sx={linkSx}>
                {page}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}>
            <Stack direction="row" spacing={1}>
              <Link href="https://www.instagram.com/bandapegada7oficial/" underline="none">
                <Avatar
                  alt="Instagram"
                  src={instagram}
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': { transform: 'scale(1.06)', boxShadow: '0 4px 12px rgba(158,56,56,0.35)' },
                  }}
                />
              </Link>
              <Link href="https://www.youtube.com/channel/UCjIgsW7rChSLXwgCnbbXmFw" underline="none">
                <Avatar
                  alt="YouTube"
                  src={youtube}
                  sx={{
                    width: 36,
                    height: 36,
                    bgcolor: 'rgba(255,255,255,0.1)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': { transform: 'scale(1.06)', boxShadow: '0 4px 12px rgba(158,56,56,0.35)' },
                  }}
                />
              </Link>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
