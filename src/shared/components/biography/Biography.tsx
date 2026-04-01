import { Box, Typography, Container, Paper } from '@mui/material';

export const Biography: React.FC = () => {
  return (
    <Container
      component="section"
      id="BIOGRAFIA"
      maxWidth="md"
      sx={{ py: { xs: 5, md: 7 }, px: { xs: 2, md: 3 } }}
    >
      <Typography variant="h1" component="h2" align="center" sx={{ color: 'text.primary' }}>
        BIOGRAFIA
      </Typography>
      <Box
        sx={{
          width: 64,
          height: 3,
          borderRadius: 2,
          bgcolor: 'primary.main',
          mx: 'auto',
          mb: 3,
        }}
      />
      <Paper
        elevation={0}
        sx={{
          mb: 2,
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 4px 24px rgba(26, 20, 18, 0.06)',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ p: { xs: 2.5, md: 4 } }}>
          <Typography
            variant="h2"
            component="h3"
            sx={{ fontSize: '1.25rem', mb: 2, color: 'primary.main' }}
          >
            NOSSA HISTÓRIA
          </Typography>
          <Typography variant="body1" color="text.secondary" component="div">
            A Banda <strong style={{ color: 'inherit', fontWeight: 600 }}>Pegada7</strong> surgiu a partir da
            evolução da antiga Banda The Graal7, que tocava principalmente em casamentos e existiu entre 2016 e
            2018.
            <br />
            <br />
            Neste mesmo ano (2018), nascia a Pegada7 com uma agenda mais recheada de shows e bailes de
            diferentes estilos, além de festas temáticas, agregando novos músicos.
            <br />
            <br />
            A banda manteve, da formação original, os músicos fundadores e sócios{' '}
            <strong style={{ color: 'inherit', fontWeight: 600 }}>Paulo Almeida</strong> (ex-Canários do Reino
            e Lailtinho Brega) e <strong style={{ color: 'inherit', fontWeight: 600 }}>Mário Lobo</strong>{' '}
            (ex-Falcão, Waldick Soriano, Bob Araújo e Bon Jovi Cover-SP).
            <br />
            <br />
            Juntaram-se a eles o tecladista <strong style={{ color: 'inherit', fontWeight: 600 }}>Pedro Matos</strong>{' '}
            e a cantora <strong style={{ color: 'inherit', fontWeight: 600 }}>Eva Grace</strong>.
            <br />
            <br />
            A banda mantém ainda uma rede de músicos de apoio freelancers formado por percussionistas,
            violinistas, saxofonista e sanfoneiro, além de técnicos e DJ para eventos específicos.
          </Typography>
          <Typography
            variant="h2"
            component="h3"
            sx={{ fontSize: '1.25rem', mt: 3, mb: 2, color: 'primary.main' }}
          >
            UMA BANDA QUE TOCA TUDO!
          </Typography>
          <Typography variant="body1" color="text.secondary" component="div">
            A banda Pegada7 tem um vasto repertório de “forró das antigas” e de flashback (nacional e
            internacional), mas também toca os sucessos do momento.
            <br />
            <br />
            Do piseiro ao xote. Do samba ao pop rock.
            <br />
            <br />
            Para cada evento, um repertório é montado e ensaiado cuidadosamente para que cada festa seja única!
            A Pegada7 já tocou em diversos casamentos, formaturas, aniversários e eventos corporativos.
            <br />
            <br />
            Além de ter um repertório especial para Réveillon e Carnaval.
          </Typography>
          <Typography
            variant="h2"
            component="h3"
            sx={{ fontSize: '1.25rem', mt: 3, mb: 2, color: 'primary.main' }}
          >
            DISCOGRAFIA
          </Typography>
          <Typography variant="body1" color="text.secondary" component="div">
            Ainda com o nome anterior (The Graal7) a banda gravou seu primeiro CD promocional em 2017 com as
            faixas:
            <br />
            <br />
            - Sugar (Maroon 5)
            <br />
            <br />
            - Treasure (Bruno Mars)
            <br />
            <br />
            - Careless Whisper (George Michael)
            <br />
            <br />
            - Chuva de Prata (Gal Costa)
            <br />
            <br />
            - Flor de Lis (Djavan)
            <br />
            <br />
            - Fato Consumado (Djavan)
            <br />
            <br />
            - Se Eu Morasse Aqui Pertinho (Adelmário Coelho)
            <br />
            <br />
            - Neném, Mulher (Adelmário Coelho)
            <br />
            <br />
            - Mãe Coruja (Vitor Vieira/Pegada7)
            <br />
            <br />
            No ano seguinte, já com nome e marca Pegada7, a banda lançou o CD Promocional - Volume 2,
            acrescentando as músicas:
            <br />
            <br />
            - Inquilina (Aviões do Forró)
            <br />
            <br />
            - Ressaca de saudade (Wesley Safadão)
            <br />
            <br />
            - Te Assumi pro Brasil (Matheus & Kauan)
            <br />
            <br />
            - Careless Whisper, versão Bachata (George Michael/Pegada7)
            <br />
            <br />
            A produção mais recente da banda é o CD Promocional Volume 03, com as faixas:
            <br />
            <br />
            - Alvejante (Priscila Sena/Zé Vaqueiro)
            <br />
            <br />
            - Verdadeiro Amor (Magníficos)
            <br />
            <br />
            - Espumas ao Vento (Fagner)
            <br />
            <br />
            - I Will Survive (Gloria Gaynor)
            <br />
            <br />
            - Mãe Coruja (Vitor Vieira/Pegada7)
            <br />
            <br />
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};
