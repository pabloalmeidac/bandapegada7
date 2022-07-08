import { Box, CardMedia} from '@mui/material';
import banda from '../../assets/banda.jpg';

export const Slider: React.FC = () => {
  return (
    <Box sx={{ width: '100%', objectFit: 'cover', overflow: 'hidden' }}>
      <CardMedia
        component="img"
        image={ banda }
        alt="foto da banda"
        sx={ { objectFit: 'cover' } }
      />
    </Box>
  );
};
