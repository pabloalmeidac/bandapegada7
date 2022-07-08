import { Box, Typography, Container } from '@mui/material';

export const Video: React.FC = () => {
  return (
    <Container sx={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column', mt: '2rem'}}>
      <Typography  variant="h1" component="h2" fontSize={24}>
        VIDEOTECA
      </Typography>
      <Box sx={{display: { xs: 'none', md: 'flex' }, width: '80%', height: '720px', mt: '1rem', mb: '2rem'}}>
        <iframe 
          title="youtube-video"
          width="100%"
          src="https://www.youtube.com/embed/9pumy_Tsllc" 
          data-testid="video" 
        />
      </Box>
      <Box sx={{display: { xs: 'flex', md: 'none' }, width: '70%', height: '90%', maxWidth:'1140px', mt: '1rem', mb: '2rem'}}>
        <iframe 
          title="youtube-video"
          width="100%"
          src="https://www.youtube.com/embed/9pumy_Tsllc" 
          data-testid="video" 
        />
      </Box>
    </Container>
  );
};