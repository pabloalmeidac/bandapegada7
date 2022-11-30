import { MenuApp, Slider, Video, Biography, Show, InstaFeed, Footer } from '../../shared/components';
import { Divider } from '@mui/material';

export const Home: React.FC = () => {
  return (
    <>
      <MenuApp />
      <Slider />
      <Video />
      <Divider />
      <Biography />
      <Divider />
      <InstaFeed />
      <Divider />
      <Show />
      <Footer />
    </>
  );
};