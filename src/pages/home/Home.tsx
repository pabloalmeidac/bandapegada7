import { MenuApp, Slider, Video, Biography } from '../../shared/components';

export const Home: React.FC = () => {
  return (
    <>
      <MenuApp />
      <Slider />
      <Video />
      <Biography />
    </>
  );
};