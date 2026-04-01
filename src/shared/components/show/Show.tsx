import { Box, CardMedia, Typography } from '@mui/material';
import show from '../../assets/show.jpg';

export const Show: React.FC = () => {
  return (
    <Box
      component="section"
      id="AGENDA"
      sx={{
        display: 'flex',
        width: '100%',
        minHeight: { xs: 380, md: 420 },
        flexDirection: { xs: 'column', md: 'row' },
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: { xs: 'none', md: '1 1 50%' },
          width: { xs: '100%', md: '50%' },
          minHeight: { xs: 220, md: 'auto' },
          py: { xs: 4, md: 6 },
          px: { xs: 3, md: 6 },
          background: 'linear-gradient(145deg, #1a1412 0%, #2d2420 48%, #3d2f2a 100%)',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            width: { xs: '100%', md: 80 },
            height: '100%',
            background: { md: 'linear-gradient(90deg, transparent, rgba(26,20,18,0.4))' },
            pointerEvents: 'none',
          },
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '1.75rem' },
            fontWeight: 700,
            fontFamily: '"Outfit", "Poppins", sans-serif',
            mb: 2,
            color: 'common.white',
            letterSpacing: '-0.02em',
          }}
        >
          PRÓXIMOS SHOWS
        </Typography>
        <Box sx={{ width: 48, height: 3, borderRadius: 2, bgcolor: 'primary.light', mb: 2 }} />
        <Typography
          variant="h3"
          sx={{
            fontSize: '1.125rem',
            fontWeight: 400,
            fontFamily: '"Poppins", sans-serif',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.7,
          }}
        >
          EM BREVE
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            maxWidth: 360,
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.875rem',
          }}
        >
          Assim que a agenda for divulgada, os detalhes aparecerão aqui. Acompanhe também nossas redes.
        </Typography>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          flex: { xs: 'none', md: '1 1 50%' },
          minHeight: { xs: 260, md: 420 },
          position: 'relative',
        }}
      >
        <CardMedia
          component="img"
          image={show}
          alt="Show ao vivo — Pegada7"
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            minHeight: { xs: 260, md: 420 },
            display: 'block',
          }}
        />
      </Box>
    </Box>
  );
};
