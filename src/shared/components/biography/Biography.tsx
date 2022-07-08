import { Box, Typography, Container, Paper } from '@mui/material';

export const Biography: React.FC = () => {
  return (
    <Container sx={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column', mt: '1rem'}}>
      <Typography variant="h1" fontSize={24} fontWeight="bold" lineHeight={1.8} letterSpacing={2} >
          BIOGRAFIA
      </Typography>
      <Paper sx={{  mb: '2rem', mt: '1rem'}}>
        <Box sx={{ padding: '1rem'}}>
          <Typography variant="h2" fontSize={22} fontWeight="bold" lineHeight={1.8} letterSpacing={2}>
            is simply 
          </Typography>
          <Typography variant="h3" fontSize={16} >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography variant="h2" fontSize={22} fontWeight="bold" lineHeight={1.8} letterSpacing={2} >
            is simply 
          </Typography>
          <Typography variant="h3" fontSize={16} >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography variant="h2" fontSize={22} fontWeight="bold" lineHeight={1.8} letterSpacing={2} >
            is simply 
          </Typography>
          <Typography variant="h3" fontSize={16} >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};