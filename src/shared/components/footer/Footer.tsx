import { Box, Typography, FormControl, Select, MenuItem, TextField, Button, Link, Avatar } from '@mui/material';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';

export const Footer: React.FC = () => {

  return (
    <Box sx={
      { 
        paddingTop: '2rem', 
        display: 'flex', 
        backgroundColor: '#303f9f', 
        overflow: 'hidden', 
        flexDirection: {xs: 'column', md: 'row'},
        justifyContent: 'space-evenly',
        width: '100vw'
      }
    }>
      <Box sx={
        { 
          display: 'flex',
          flexDirection: {xs: 'column', md: 'column'},
        }
      }>
        <Typography 
          variant="h2" 
          fontSize={28} 
          fontWeight="500"
          fontFamily="Sans-serif"
          textAlign="center"
          color="#ffffff" >
          FALE COM A GENTE
        </Typography>
        <FormControl>
          <TextField
            sx={ { mb: '1rem', mt: '1rem'  } }
            variant="outlined"
            color="info"
            label="Nome"
            size="medium"
            name="nome"
          />
          <TextField
            sx={ {  mb: '1rem' } }
            variant="outlined"
            color="info"
            label="Email"
            size="medium"
            name="email"
          />
          <Select
            id="assunto"
            size="medium"
            label="Assunto"
            name="assunto"
            color="info"
          >
            <MenuItem value="musicas">Musicas</MenuItem>
            <MenuItem value="contrato">Contrato de Shows</MenuItem>
            <MenuItem value="imprensa">Imprensa</MenuItem>
            <MenuItem value="club">Fã Clube</MenuItem>
          </Select>
          <TextField
            sx={ {  mt: '1rem', mb: '1rem' } }
            variant="outlined"
            label="Mensagem"
            color="info"
            size="medium"
            name="mensagem"
          />
        </FormControl>
        <Box textAlign='center' marginBottom='2rem'>
          <Button
            variant="contained"
            color="info"
            size="medium"
          >
            ENVIAR!
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography 
          variant="h2" 
          fontSize={28} 
          fontWeight="500"
          fontFamily="Sans-serif"
          color="#ffffff"
          textAlign='center'
        >
          MATERIAL PARA CONTRATANTE
        </Typography>
        <Box sx={ { textAlign: 'center', mt: '1rem', mb: '2rem' } }  >
          <Button
            variant="contained"
            color="info"
            size="medium"
          >
            DOWNLOAD
          </Button>
        </Box>
      </Box>
      <Box textAlign='center'>
        <Typography 
          variant="h2" 
          fontSize={28} 
          fontWeight="500"
          fontFamily="Sans-serif" 
          color="#ffffff"
        >
          CONTATO
        </Typography>
        <Typography 
          variant="h3" 
          fontSize={22} 
          fontWeight="300"
          fontFamily="Sans-serif" 
          color="#ffffff"
          marginTop="1rem">
          (85) 99691-0178
          <br/><br/>
          (85) 99753-6261
        </Typography>
        <Typography 
          variant="h3" 
          fontSize={22} 
          fontWeight="300"
          fontFamily="Sans-serif" 
          color="#ffffff"
          marginTop="1rem"
          marginBottom='2rem'
        >
          email@email.com.br
        </Typography>
      </Box>
      <Box textAlign='center'>
        <Typography 
          variant="h2" 
          fontSize={28} 
          fontWeight="500"
          fontFamily="Sans-serif" 
          color="#ffffff"
        >
          Midias Sociais
        </Typography>
        <Box display="flex" flexDirection="row" justifyContent="center" marginTop="1rem">
          <Link href="https://www.instagram.com/bandapegada7oficial/" underline="none">
            <Avatar alt="facebook" src={facebook} />
          </Link>
          <Link href="https://www.instagram.com/bandapegada7oficial/" underline="none">
            <Avatar alt="instagram" src={instagram} />
          </Link>
          <Link href="https://www.youtube.com/channel/UCjIgsW7rChSLXwgCnbbXmFw" underline="none" marginBottom='2rem'>
            <Avatar alt="youtube" src={youtube} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};