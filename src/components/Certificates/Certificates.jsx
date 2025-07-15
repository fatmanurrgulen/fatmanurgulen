import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Sertifikalar
import jsCert from '../../assets/JAVASCRIPT.pdf';
import nodeCert from '../../assets/Node.js_ile_Web_Programlama_Sertifika.pdf';
import reactCert from '../../assets/REACT_ile_Web_Programcılığı_Sertifika.pdf';
import gitCert from '../../assets/Versiyon_Kontrolleri__Git_ve_GitHub_Sertifika.pdf';

const certificateList = [
  {
    title: 'JavaScript Eğitimi',
    description:
      'Fonksiyonlar, DOM , event handling gibi modern JavaScript konularını kapsayan uygulamalı eğitim.',
    link: jsCert,
  },
  {
    title: 'Node.js ile Web Programlama',
    description:
      'Node.js, Express.js ve REST API mimarisi üzerine yoğunlaşan backend geliştirme eğitimi.',
    link: nodeCert,
  },
  {
    title: 'React ile Web Programcılığı',
    description:
      'Component mantığı, state ve props yönetimi ile kullanıcı arayüzü geliştirme üzerine derinlemesine eğitim.',
    link: reactCert,
  },
  {
    title: 'Git & GitHub Versiyon Kontrolü',
    description:
      'Git iş akışları, branch yönetimi ve GitHub üzerinden projeleri versiyonlama teknikleri.',
    link: gitCert,
  },
];

// Kart stili
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '20px',
  padding: '1.5rem',
  backgroundColor: theme.palette.mode === 'dark' ? '#1e1e2f' : '#ffffff',
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 8px 24px rgba(193, 42, 140, 0.1)'
      : '0 8px 24px rgba(193, 42, 140, 0.08)',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#e09bc1' : '#c12a8c'}`,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow:
      theme.palette.mode === 'dark'
        ? '0 12px 28px rgba(193, 42, 140, 0.2)'
        : '0 12px 28px rgba(193, 42, 140, 0.3)',
  },
}));

const Certificates = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box id="certificates" sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            color: isDark ? '#e09bc1' : '#c12a8c',
            mb: 6,
          }}
        >
          Sertifikalarım
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {certificateList.map((cert, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index} display="flex">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
                style={{ width: '100%' }}
              >
                <StyledCard>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        color: '#e09bc1',
                        fontWeight: 600,
                        textAlign: 'center',
                      }}
                    >
                      {cert.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: isDark ? '#ccc' : '#555',
                        mb: 0.6,
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        textAlign: 'center',
                        fontFamily: '"Raleway", sans-serif',
                      }}
                    >
                      {cert.description}
                    </Typography>
                  </CardContent>

                  <Box
                    display="flex"
                    justifyContent="center"
                    mt="auto"
                    sx={{ pt: 2 }}
                  >
                    <Button
                      variant="contained"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        px: 2.4,
                        py: 1.05,
                        borderRadius: '12px',
                        backgroundColor: '#c12a8c',
                        fontWeight: 600,
                        textTransform: 'none',
                        fontSize: '0.83rem',
                        color: '#fff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#e09bc1',
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                        },
                      }}
                    >
                      Sertifikayı Görüntüle
                    </Button>
                  </Box>
                </StyledCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certificates;
