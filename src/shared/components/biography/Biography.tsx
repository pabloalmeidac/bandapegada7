import { Box, Typography, Container, Paper } from '@mui/material';

export const Biography: React.FC = () => {
  return (
    <Container sx={{ display: 'flex', width: '100vw', alignItems: 'center', flexDirection: 'column', mt: '1rem'}}>
      <Typography variant="h1" fontSize={24} fontWeight="bold" lineHeight={1.8} letterSpacing={2} >
          BIOGRAFIA
      </Typography>
      <Paper sx={{  mb: '2rem', mt: '1rem'}}>
        <Box sx={{ padding: '1rem'}}>
          <Typography variant="h2" fontSize={22} fontWeight="bold" lineHeight={1.8} >
            NOSSA HISTÓRIA
          </Typography>
          <Typography variant="h3" fontSize={16} >
            A Banda <b>Pegada7</b> surgiu a partir da evolução da antiga Banda The Graal7, que tocava
            principalmente em casamentos e existiu entre 2016 e 2018. 
            <br/><br/>
            Neste mesmo ano (2018),
            nascia a Pegada7 com uma agenda mais recheada de shows e bailes de diferentes estilos,
            além de festas temáticas, agregando novos músicos. 
            <br/><br/>
            A banda manteve, da formação
            original, os músicos fundadores e sócios <b>Paulo Almeida</b> (ex-Canários do Reino e Lailtinho
            Brega) e <b>Mário Lobo</b> (ex-Falcão, Waldick Soriano, Bob Araújo e Bon Jovi Cover-SP).
            <br/><br/>
            Juntaram-se a eles o tecladista <b>Pedro Matos</b>, a cantora <b>Eva Grace</b> e recentemente o novo
            cantor e guitarrista <b>Marcilio Façanha</b>. 
            <br/><br/>
            A banda mantém ainda uma rede de músicos de
            apoio freelancers formado por percussionistas, violinistas, saxofonista e sanfoneiro, além de
            técnicos e DJ para eventos específicos.
          </Typography>
          <Typography variant="h2" fontSize={22} fontWeight="bold" lineHeight={1.8} marginTop="1rem" >
            UMA BANDA QUE TOCA TUDO!
          </Typography>
          <Typography variant="h3" fontSize={16} >
            A banda Pegada7 tem um vasto repertório de “forró das antigas” e de flashback (nacional e
            internacional), mas também toca os sucessos do momento. 
            <br/><br/>
            Do piseiro ao xote. Do samba
            ao pop rock. 
            <br/><br/>
            Para cada evento, um repertório é montado e ensaiado cuidadosamente para
            que cada festa seja única! A Pegada7 já tocou em diversos casamentos, formaturas,
            aniversários e eventos corporativos. 
            <br/><br/>
            Além de ter um repertório especial para Réveillon e Carnaval.
          </Typography>
          <Typography variant="h2" fontSize={22} fontWeight="bold" lineHeight={1.8} marginTop="1rem" >
            DISCOGRAFIA
          </Typography>
          <Typography variant="h3" fontSize={16} >
            Ainda com o nome anterior (The Graal7) a banda gravou seu primeiro CD promocional em
            2017 com as faixas:
            <br/><br/>
            - Sugar (Maroon 5)<br/><br/>
            - Treasure (Bruno Mars)<br/><br/>
            - Careless Whisper (George Michael)<br/><br/>
            - Chuva de Prata (Gal Costa)<br/><br/>
            - Flor de Lis (Djavan)<br/><br/>
            - Fato Consumado (Djavan)<br/><br/>
            - Se Eu Morasse Aqui Pertinho (Adelmário Coelho)<br/><br/>
            - Neném, Mulher (Adelmário Coelho)<br/><br/>
            - Mãe Coruja (Vitor Vieira/Pegada7) <br/><br/>
            No ano seguinte, já com nome e marca Pegada7, a banda lançou o CD Promocional -
            Volume 2, acrescentando as músicas:
            <br/><br/>
            - Inquilina (Aviões do Forró)<br/><br/>
            - Ressaca de saudade (Wesley Safadão)<br/><br/>
            - Te Assumi pro Brasil (Matheus & Kauan)<br/><br/>
            - Careless Whisper, versão Bachata (George Michael/Pegada7)<br/><br/>
            A produção mais recente da banda é o CD Promocional Volume 03, com as faixas:
            <br/><br/>
            - Alvejante (Priscila Sena/Zé Vaqueiro)<br/><br/>
            - Verdadeiro Amor (Magníficos)<br/><br/>
            - Espumas ao Vento (Fagner)<br/><br/>
            - I Will Survive (Gloria Gaynor)<br/><br/>
            - Mãe Coruja (Vitor Vieira/Pegada7)<br/><br/>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};