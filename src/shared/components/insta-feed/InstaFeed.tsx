import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getInstaFeed } from '../../services/api';
import { Carousel } from './Carousel';

interface IFeedItem {
  id: string;
  media_type: 'IMAGE' | 'VIDEO';
  media_url: string;
  permalink: string;
}

export const InstaFeed: React.FC = () => {
  const [feedList, setFeedList] = useState<IFeedItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getInstaFeed();
      setFeedList(response);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ display: 'flex-block', width: '100vw', height:'70vh' }} id='FOTOS'>
      <Typography variant="h1" fontSize={24} fontWeight="bold" lineHeight={1.8} letterSpacing={2} textAlign="center" >
          Estamos no instagram
      </Typography>
      <Box sx={{ display: 'flex', width: '100%', flexWrap: 'wrap', height:'50%', flexDirection: 'row', gap: '1rem' }}>
        {feedList && <Carousel slides={feedList} />}
      </Box>
    </Box>
  );
};
