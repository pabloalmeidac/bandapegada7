import { MenuApp, Slider, Video, Biography, FooterM } from '../../shared/components';
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
      <FooterM />
    </>
  );
};