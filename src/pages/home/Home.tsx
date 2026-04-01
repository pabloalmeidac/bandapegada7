import { MenuApp, Slider, Video, Biography, Show, Footer } from '../../shared/components';
import { Box } from '@mui/material';

const SectionRule = () => (
  <Box
    aria-hidden
    sx={{
      height: 1,
      maxWidth: 120,
      mx: 'auto',
      my: { xs: 0, md: 1 },
      bgcolor: 'divider',
      borderRadius: 1,
    }}
  />
);

export const Home: React.FC = () => {
  return (
    <>
      <MenuApp />
      <Slider />
      <Video />
      <SectionRule />
      <Biography />
      <SectionRule />
      <Show />
      <Footer />
    </>
  );
};
