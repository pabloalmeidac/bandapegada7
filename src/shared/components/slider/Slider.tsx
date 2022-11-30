import { Box, CardMedia} from '@mui/material';
import banda from '../../assets/banda.jpg';

export const Slider: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', marginTop:'4rem', width: '100%', height: { xs: '30%', md: '60%' },  overflow: 'hidden', justifyContent: 'center'}}>
      <CardMedia
        component="img"
        image={ banda }
        alt="foto da banda"
        sx={ { maxWidth: { xs: '100%', md: '80%' }, height: '100%', objectFit: 'fill'} }
      />
    </Box>
  );
};
