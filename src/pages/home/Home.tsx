import { MenuApp, Slider, Video, Biography, Footer } from '../../shared/components';
import { Divider } from '@mui/material';

export const Home: React.FC = () => {
  return (
    <>
      <MenuApp />
      <Slider />
      <Divider />
      <Video />
      <Divider />
      <Biography />
      <Divider />
      <Footer />
    </>
  );
};