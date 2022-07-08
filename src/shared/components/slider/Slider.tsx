import { Box, CardMedia} from '@mui/material';
import banda from '../../assets/banda.jpeg';

export const Slider: React.FC = () => {
  return (
    <Box sx={{ width: '100%', objectFit: 'cover' }}>
      <CardMedia
        component="img"
        image={ banda }
        alt="foto da banda"
        sx={ { objectFit: 'cover', overflow: 'hidden' } }
      />
    </Box>
  );
};
