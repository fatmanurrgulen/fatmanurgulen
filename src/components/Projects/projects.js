import React from 'react';
import { Box, Typography, useTheme, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Projeler
const projects = [
  {
    title: 'E-ticaret ve İlan Platformu',
    description: [
      'React.js, MUI ve Styled-Components kullanılarak geliştirilen responsive frontend; ikon desteği ve Axios ile güçlü, kullanıcı dostu bir deneyim sunar.',
      'Node.js, Express, Sequelize ve MySQL ile kurulan backend; JWT tabanlı kimlik doğrulama, CORS desteği ve güvenli API mimarisiyle çalışır.',
      'RESTful API yapısı sayesinde frontend ile backend arasında hızlı ve güvenli veri akışı sağlanarak kullanıcı işlemleri sorunsuz biçimde gerçekleştirilir.',
      'Kullanıcılar; aralarında anlık mesajlaşma, ilan ekleme, düzenleme, silme ve favori listelerini yönetme gibi işlevleri kolayca gerçekleştirebilir.',
    ],
    technologies: ['React.js', 'MUI', 'Node.js', 'MySQL'],
  },
  {
    title: 'Kişisel Web Sitesi',
    description: [
      'React.js ve Material UI ile geliştirilen modern, kullanıcı odaklı ve mobil uyumlu bu portföy sitesi; sade yapısı ve yüksek performansıyla öne çıkar.',
      'Framer Motion ile desteklenen giriş animasyonları ve proje kartları, ziyaretçilere akıcı ve etkileşimli bir kullanıcı arayüzü sunar.',
      'EmailJS entegrasyonu sayesinde kullanıcılar, doğrudan iletişim formu üzerinden mesaj göndererek kolay ve hızlı bir etkileşim kurabilir.',
      'Vercel üzerinde yayınlanan site; performans, erişilebilirlik ve içerik bakımından sürdürülebilir ve güncel bir yapı sunar.',
    ],
    technologies: ['JavaScript', 'React.js', 'MUI', 'Vercel'],
  },
];

// Stil: Sertifikalardaki kart yapısına uygun
const ThemedCard = styled(Card)(({ theme }) => ({
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

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box sx={{ py: 10, px: 3 }} id="projects">
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: isDark ? '#e09bc1' : '#c12a8c',
          fontWeight: 700,
          mb: 6,
        }}
      >
        Projelerim
      </Typography>

      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={4}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.2 }}
            style={{ width: '100%', maxWidth: '460px' }}
          >
            <ThemedCard>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{
                    color: '#e09bc1',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    mb: 1,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  {project.title}
                </Typography>

                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {project.description.map((text, j) => (
                    <Typography
                      key={j}
                      component="li"
                      variant="body2"
                      sx={{
                        color: isDark ? '#ccc' : '#444',
                        mb: 0.8,
                        fontSize: '0.95rem',
                        lineHeight: 1.9,
                        fontFamily: '"Raleway", sans-serif',
                      }}
                    >
                      {text}
                    </Typography>
                  ))}
                </Box>

                <Box mt={2} display="flex" flexWrap="wrap" justifyContent="center" gap={1}>
                  {project.technologies.map((tech) => (
                    <Box
                      key={tech}
                      sx={{
                        backgroundColor: '#e09bc1',
                        color: isDark ? '#1e1e2f' : '#fff',
                        fontSize: '0.8rem',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        fontWeight: 500,
                        fontFamily: '"Roboto", sans-serif',
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </ThemedCard>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
