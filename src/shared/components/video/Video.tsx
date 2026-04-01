import { Box, Container, Typography } from '@mui/material';

export const Video: React.FC = () => {
  return (
    <Box
      component="section"
      id="VIDEOTECA"
      sx={{
        py: { xs: 5, md: 7 },
        px: { xs: 2, md: 0 },
        background:
          'linear-gradient(180deg, rgba(250,246,242,1) 0%, rgba(232,221,212,0.35) 50%, rgba(250,246,242,1) 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h2"
          align="center"
          sx={{
            mb: 0.5,
            color: 'text.primary',
          }}
        >
          VIDEOTECA
        </Typography>
        <Box
          sx={{
            width: 64,
            height: 3,
            borderRadius: 2,
            bgcolor: 'primary.main',
            mx: 'auto',
            mb: 3,
          }}
        />
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 24px 48px -12px rgba(26, 20, 18, 0.18), 0 0 0 1px rgba(26, 20, 18, 0.06)',
            bgcolor: '#000',
            aspectRatio: '16 / 9',
            maxWidth: 960,
            mx: 'auto',
          }}
        >
          <iframe
            title="Vídeo oficial Pegada7 no YouTube"
            width="100%"
            height="100%"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              border: 'none',
              display: 'block',
            }}
            src="https://www.youtube.com/embed/9pumy_Tsllc"
            data-testid="video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Container>
    </Box>
  );
};
