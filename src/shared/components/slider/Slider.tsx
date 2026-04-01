import { Box, CardMedia } from '@mui/material';
import banda from '../../assets/banda.jpg';

export const Slider: React.FC = () => {
  return (
    <Box
      component="section"
      aria-label="Destaque"
      sx={{
        position: 'relative',
        mt: { xs: '56px', md: '64px' },
        width: '100%',
        minHeight: { xs: '42vh', sm: '48vh', md: 'min(78vh, 820px)' },
        maxHeight: { md: '90vh' },
        overflow: 'hidden',
        bgcolor: '#1a1412',
      }}
    >
      <CardMedia
        component="img"
        image={banda}
        alt="Banda Pegada7"
        sx={{
          width: '100%',
          height: { xs: '42vh', sm: '48vh', md: 'min(78vh, 820px)' },
          maxHeight: { md: '90vh' },
          objectFit: 'cover',
          objectPosition: 'center 28%',
          display: 'block',
        }}
      />
      <Box
        sx={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(26,20,18,0.35) 0%, transparent 35%, transparent 55%, rgba(26,20,18,0.55) 100%)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, transparent, #9e3838, transparent)',
          opacity: 0.9,
        }}
      />
    </Box>
  );
};
