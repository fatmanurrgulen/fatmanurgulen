import React, { useState } from 'react';   
import { Container, Typography, Grid, Card, CardContent, Chip, IconButton } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Tema ayarları
const theme = createTheme();

// Stil edilmiş kart
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: '10px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[10],
  },
}));

// Arka kart - kısmi görünümlü proje
const PartialShadowCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: '10%',
  right: '-15px',
  width: '80%',
  height: '80%',
  opacity: 0.4,
  borderRadius: '10px',
  backgroundColor: 'rgba(245, 245, 245, 0.9)', // Yarı saydam beyaz
  boxShadow: theme.shadows[3],
  zIndex: 0,
}));

// Animasyon ayarları
const cardVariants = {
  hidden: { opacity: 0, rotateY: 180, x: 300 },
  visible: (index) => ({
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: {
      delay: index * 0.5,
      duration: 0.8,
      type: 'spring',
      stiffness: 60,
    },
  }),
  exit: { opacity: 0, rotateY: 180, x: -300, transition: { duration: 0.6 } },
};

// Projeler bileşeni
const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projectData = [
    {
      title: 'E-Commerce and Ad Platform',
      duration: 'May 2024 - Ongoing',
      description: [
        'Developed a scalable logistics and advertising platform for users.',
        'Enabled users to explore services and communicate effectively within.',
        'Implemented features for managing favorite listings, adding and deleting.',
        'Utilized React.js for creating dynamic, responsive UI components.',
        'Integrated Node.js for secure backend communication and MySQL database.',
      ],
      technologies: ['React.js', 'Node.js', 'MySQL'],
    },
    {
      title: 'Portfolio Website',
      duration: 'Ongoing',
      description: [
        'Built a modern platform using JavaScript and React.js technologies.',
        'Created a portfolio showcasing my technical skills and projects.',
        'Ensured responsive design for seamless functionality across all devices.',
        'Designed a user-friendly interface that meets high visual standards.',
        'Highlighted projects through an intuitive portfolio for showcasing skills.',
      ],
      technologies: ['JavaScript', 'React.js'],
    },
  ];

  const handleNextProject = () => {
    setActiveProject((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrevProject = () => {
    setActiveProject((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 4, padding: '20px', backgroundColor: '#fff', borderRadius: '10px' }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#c12a8c' }}>
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4} sx={{ position: 'relative' }}>
            {/* Sol ok butonu */}
            <IconButton 
              sx={{ 
                position: 'absolute', 
                left: '-40px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                zIndex: 2 // z-index ekle
              }} 
              onClick={handlePrevProject}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <motion.div
              key={activeProject}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              style={{ perspective: 1000 }}
            >
              {/* Kısmi görünümlü arka proje kartı */}
              <PartialShadowCard>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#c12a8c' }}>
                    {projectData[1].title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {projectData[1].duration}
                  </Typography>
                </CardContent>
              </PartialShadowCard>

              {/* Öndeki aktif proje kartı */}
              <StyledCard onClick={handleNextProject}> {/* Tıklama olayı ekleniyor */}
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#c12a8c' }}>
                    {projectData[activeProject].title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {projectData[activeProject].duration}
                  </Typography>
                  <Typography variant="body2" component="ul" paragraph>
                    {projectData[activeProject].description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </Typography>
                  <div>
                    {projectData[activeProject].technologies.map((tech, idx) => (
                      <Chip 
                        key={idx} 
                        label={tech} 
                        variant="outlined" 
                        sx={{ margin: '2px', backgroundColor: '#e8a6cd', color: '#c12a8c' }} 
                      />
                    ))}
                  </div>
                </CardContent>
              </StyledCard>
            </motion.div>

            {/* Sağ ok butonu */}
            <IconButton 
              sx={{ 
                position: 'absolute', 
                right: '-70px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                zIndex: 2 // z-index ekle
              }} 
              onClick={handleNextProject}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;
