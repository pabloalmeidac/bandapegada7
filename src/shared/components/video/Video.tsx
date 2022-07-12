import { Box, Typography } from '@mui/material';

export const Video: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', width: '100vw', alignItems: 'center', flexDirection: 'column', mt: '2rem', overflow: 'hidden'}}>
      <Typography variant="h1" fontSize={24} fontWeight="bold" lineHeight={1.8} letterSpacing={2} >
        VIDEOTECA
      </Typography>
      <Box sx={{display: 'flex', width: { xs: '90%', md: '80%' }, height: { xs: '100%', md: '720px' }, mt: '1rem', mb: '2rem'}}>
        <iframe 
          title="youtube-video"
          width="100%"
          src="https://www.youtube.com/embed/9pumy_Tsllc" 
          data-testid="video" 
        />
      </Box>
    </Box>
  );
};