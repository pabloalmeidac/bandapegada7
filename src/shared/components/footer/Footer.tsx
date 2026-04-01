import { Box, Typography, TextField, Button, Link, Avatar, Grid, Stack } from '@mui/material';
import instagram from '../../assets/footer/instagram.svg';
import youtube from '../../assets/footer/youtube.svg';
import { AiFillPhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';

const fieldSx = {
  mb: 1.5,
  '& .MuiFilledInput-root': {
    borderRadius: 2,
    backgroundColor: 'rgba(255,255,255,0.08)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,0.12)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255,255,255,0.14)',
    },
  },
  '& .MuiFilledInput-input': {
    color: 'common.white',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255,255,255,0.65)',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: 'primary.light',
  },
} as const;

export const Footer: React.FC = () => {
  return (
    <Box component="footer">
      <Box
        sx={{
          pt: { xs: 5, md: 7 },
          pb: 4,
          px: { xs: 2, md: 4 },
          background: 'linear-gradient(180deg, #141110 0%, #0d0b0a 100%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }} maxWidth="lg" sx={{ mx: 'auto' }}>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h2"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
                fontFamily: '"Outfit", "Poppins", sans-serif',
                color: 'common.white',
                mb: 2,
                letterSpacing: '-0.01em',
              }}
            >
              Fale com a gente
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.55)', mb: 2, maxWidth: 400 }}>
              Envie uma mensagem para contratações e dúvidas. Respondemos o quanto antes.
            </Typography>
            <form
              target="_blank"
              action="https://formsubmit.co/pabloalmeidac@hotmail.com"
              method="POST"
            >
              <Stack spacing={0}>
                <TextField variant="filled" label="Nome" size="medium" name="name" fullWidth sx={fieldSx} />
                <TextField variant="filled" label="Email" size="medium" name="email" fullWidth sx={fieldSx} />
                <TextField variant="filled" label="Assunto" size="medium" name="subject" fullWidth sx={fieldSx} />
                <TextField
                  variant="filled"
                  label="Mensagem"
                  size="medium"
                  name="message"
                  multiline
                  minRows={3}
                  fullWidth
                  sx={fieldSx}
                />
              </Stack>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" size="large" type="submit" fullWidth sx={{ maxWidth: 280 }}>
                  Enviar mensagem
                </Button>
              </Box>
            </form>
          </Grid>
          <Grid item xs={12} sm={6} md={4} id="CONTATO">
            <Typography
              variant="h2"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
                fontFamily: '"Outfit", "Poppins", sans-serif',
                color: 'common.white',
                mb: 2,
              }}
            >
              Contato
            </Typography>
            <Stack spacing={2} sx={{ color: 'rgba(255,255,255,0.85)' }}>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, lineHeight: 1.6 }}>
                <AiFillPhone style={{ flexShrink: 0, opacity: 0.9 }} /> (85) 99691-0178
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1, lineHeight: 1.6 }}>
                <AiFillPhone style={{ flexShrink: 0, opacity: 0.9 }} /> (85) 99753-6261
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, lineHeight: 1.6 }}>
                <HiOutlineMail style={{ flexShrink: 0, marginTop: 2, opacity: 0.9 }} />
                <span>assessoria@bandapegada7.com.br</span>
              </Typography>
            </Stack>
            <Link href="https://linktr.ee/bandapegada7" underline="none" target="_blank" rel="noopener noreferrer">
              <Button variant="outlined" size="medium" sx={{ mt: 3, borderColor: 'rgba(255,255,255,0.35)', color: 'common.white', '&:hover': { borderColor: 'primary.light', bgcolor: 'rgba(158,56,56,0.12)' } }}>
                Linktree — fale conosco
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h2"
              sx={{
                fontSize: '1.25rem',
                fontWeight: 700,
                fontFamily: '"Outfit", "Poppins", sans-serif',
                color: 'common.white',
                mb: 2,
              }}
            >
              Redes sociais
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <Link href="https://www.instagram.com/bandapegada7oficial/" underline="none">
                <Avatar
                  alt="Instagram"
                  src={instagram}
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: 'rgba(255,255,255,0.08)',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                />
              </Link>
              <Link href="https://www.youtube.com/channel/UCjIgsW7rChSLXwgCnbbXmFw" underline="none">
                <Avatar
                  alt="YouTube"
                  src={youtube}
                  sx={{
                    width: 48,
                    height: 48,
                    bgcolor: 'rgba(255,255,255,0.08)',
                    transition: 'transform 0.2s',
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          py: 2,
          textAlign: 'center',
          bgcolor: 'rgba(0,0,0,0.25)',
          borderTop: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <Link href="https://pabloalmeidac.github.io/" underline="none" target="_blank" rel="noopener noreferrer">
          <Typography
            variant="body2"
            sx={{
              fontWeight: 500,
              fontStyle: 'italic',
              fontFamily: '"Poppins", sans-serif',
              color: 'rgba(250,246,242,0.45)',
              fontSize: '0.8125rem',
              '&:hover': { color: 'rgba(250,246,242,0.75)' },
            }}
          >
            Desenvolvido por OSHLAB
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};
