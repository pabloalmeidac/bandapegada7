import { Box, Typography, FormControl, Select, MenuItem, TextField, Button, Link, Avatar } from '@mui/material';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';

export const Footer: React.FC = () => {

  return (
    <Box sx={{ paddingTop: '2rem', display: 'flex', justifyContent: 'center', backgroundColor: '#303f9f', overflow: 'hidden', flexDirection: 'column'}}>
      <Box>
        <Typography 
          variant="h2" 
          fontSize={22} 
          fontWeight="500"
          fontFamily="Sans-serif"
          color="#ffffff" >
          FALE COM A GENTE
        </Typography>
        <FormControl>
          <TextField
            sx={ { width: '50%', mb: '1rem', mt: '1rem', color: '#ffffff' } }
            variant="outlined"
            label="Nome"
            size="small"
            name="nome"
          />
          <TextField
            sx={ { width: '50%', mb: '1rem' } }
            variant="outlined"
            label="Email"
            size="small"
            name="email"
          />
          <Select
            id="assunto"
            size="small"
            label="Assunto"
            name="assunto"
          >
            <MenuItem value="musicas">Musicas</MenuItem>
            <MenuItem value="musicas">Contrato de Shows</MenuItem>
            <MenuItem value="musicas">Imprensa</MenuItem>
            <MenuItem value="musicas">Fã Clube</MenuItem>
          </Select>
          <TextField
            sx={ { width: '50%', mt: '1rem', mb: '1rem' } }
            variant="outlined"
            label="Mensagem"
            size="medium"
            name="mensagem"
          />
        </FormControl>
        <Box >
          <Button
            variant="contained"
            color="inherit"
            size="medium"
          >
            ENVIAR!
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography 
          variant="h2" 
          fontSize={22} 
          fontWeight="500"
          fontFamily="Sans-serif"
          color="#ffffff"
        >
          MATERIAL PARA CONTRATANTE
        </Typography>
        <Box sx={ { textAlign: 'center', mt: '1rem' } }  >
          <Button
            variant="contained"
            color="inherit"
            size="medium"
          >
            DOWNLOAD
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography 
          variant="h2" 
          fontSize={22} 
          fontWeight="500"
          fontFamily="Sans-serif" 
          color="#ffffff" 
        >
          Contato
        </Typography>
        <Typography 
          variant="h3" 
          fontSize={18} 
          fontWeight="500"
          fontFamily="Sans-serif" 
          color="#ffffff"
          marginTop="1rem">
          (85) 0000-0000
        </Typography>
        <Typography 
          variant="h3" 
          fontSize={18} 
          fontWeight="500"
          fontFamily="Sans-serif" 
          color="#ffffff"
          marginTop="1rem">
          email@email.com.br
        </Typography>
      </Box>
      <Box>
        <Typography 
          variant="h2" 
          fontSize={22} 
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
          <Link href="" underline="none">
            <Avatar alt="instagram" src={instagram} />
          </Link>
          <Link href="https://www.youtube.com/channel/UCjIgsW7rChSLXwgCnbbXmFw" underline="none">
            <Avatar alt="youtube" src={youtube} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};