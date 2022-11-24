import { Box, Typography, TextField, Button, Link, Avatar } from '@mui/material';
import instagram from '../../assets/footer/instagram.svg';
import youtube from '../../assets/footer/youtube.svg';
import { AiFillPhone } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';

export const FooterGrobens: React.FC = () => {
  const [message, SetMessage] = useState({ name: '', email: '', subject: '', message: '' });

  interface ITarget {
    target: { name: string, value: string}
  }

  const handleChange = ({ target: { name, value } }: ITarget) => {
    SetMessage((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Box>
      <Box sx={
        { 
          paddingTop: '2rem', 
          display: 'flex', 
          backgroundColor: '#1d1513', 
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
          <form
            target="_blank"
            action="https://formsubmit.co/pabloalmeidac@hotmail.com" 
            method="POST"
          >
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <TextField
                sx={ { mb: '1rem', mt: '1rem', backgroundColor: 'white'  } }
                variant="filled"
                label="Nome"
                size="medium"
                name="name"
                onChange={ (e) => handleChange(e) }
              />
              <TextField
                sx={ {  mb: '1rem', backgroundColor: 'white' } }
                variant="filled"
                label="Email"
                size="medium"
                name="email"
                onChange={ (e) => handleChange(e) }
              />
              <TextField
                sx={ { mb: '1rem',  backgroundColor: 'white' } }
                variant="filled"
                label="Assunto"
                size="medium"
                name="subject"
                onChange={ (e) => handleChange(e) }
              />
              <TextField
                sx={ { mb: '1rem',  backgroundColor: 'white', color:'black' } }
                variant="filled"
                label="Mensagem"
                size="medium"
                name="message"
                onChange={ (e) => handleChange(e) }
                multiline
              />
            </Box>
            <Box textAlign='center' marginBottom='2rem'>
              <Button
                variant="contained"
                size="medium"
                type="submit"
                sx={{ marginBottom: '2rem', backgroundColor: '#9e3838'}}
              >
              ENVIAR!
              </Button>
            </Box>
          </form>
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
              sx={{ backgroundColor: '#9e3838'}}

              size="medium"
            >
            DOWNLOAD
            </Button>
          </Box>
        </Box>
        <Box textAlign='center' id="CONTATO" >
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
            <AiFillPhone /> (85) 99691-0178
            <br/><br/>
            <AiFillPhone /> (85) 99753-6261
            <br/><br/>
            <HiOutlineMail /> email@email.com.br
            <br/><br/>
          </Typography>
          <Link href="https://linktr.ee/bandapegada7" underline="none" target="_blank" >
            <Button
              variant="contained"
              size="medium"
              sx={ {  mb: '2rem', backgroundColor: '#9e3838' } }
            >
            Fale conosco
            </Button>
          </Link>
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
              <Avatar alt="instagram" src={instagram} />
            </Link>
            <Link href="https://www.youtube.com/channel/UCjIgsW7rChSLXwgCnbbXmFw" underline="none" marginBottom='2rem'>
              <Avatar alt="youtube" src={youtube} />
            </Link>
          </Box>
        </Box>
      
      </Box>
      <Box textAlign='center' sx={{ padding: '10px 0 10px 0'}}>
        <Link 
          href="https://pabloalmeidac.github.io/"
          underline="none"
          target="_blank"
        >
          <Typography
            fontSize={14} 
            fontWeight="600"
            fontStyle="italic"
            fontFamily="Poppins" 
            color="#31271e"
          >
          Desenvolvido com carinho por Pablo Almeida
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};