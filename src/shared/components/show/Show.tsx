import { Box, CardMedia, Typography} from '@mui/material';
import show from '../../assets/show.jpg';

export const Show: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', width: '100vw', height:'50%', flexDirection: {xs: 'column', md: 'row'} }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#333', width: {xs: '100%', md: '50%'}, height: {xs: '50%', md: '100%'} }}>
        <Typography 
          variant="h2" 
          fontSize={28} 
          fontWeight="500"
          fontFamily="Sans-serif"
          marginBottom='1rem'
          marginLeft = '2rem'
          color="#ffffff" >
          PRÓXIMOS SHOWS
        </Typography>
        <Typography 
          variant="h3" 
          fontSize={18} 
          fontWeight="400"
          marginLeft = '2rem'
          fontFamily="Sans-serif"
          color="#ffffff" >
          EM BREVE
        </Typography>
      </Box>
      <Box sx={{ width: {xs: '100%', md: '50%'}, height: {xs: '50%', md: '100%'}}}>
        <CardMedia
          component="img"
          image={ show }
          alt="foto da banda"
          sx={ { objectFit: 'cover', height:'100%' } }
        />
      </Box>
    </Box>
  );
};
