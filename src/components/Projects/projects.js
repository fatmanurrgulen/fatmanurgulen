import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Chip, IconButton } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Canvas } from '@react-three/fiber'; // 3D için Canvas
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'; // 3D bileşenler

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
  width: '100%',
  maxWidth: '450px',
  '@media (max-width: 600px)': {
    '&:hover': {
      transform: 'none',
      boxShadow: theme.shadows[5],
    },
  },
}));

// Arka kart - kısmi görünümlü proje
const PartialShadowCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: '10%',
  right: '-10px',
  width: '80%',
  height: '80%',
  opacity: 0.4,
  borderRadius: '10px',
  backgroundColor: 'rgba(245, 245, 245, 0.9)',
  boxShadow: theme.shadows[3],
  zIndex: 0,
  '@media (max-width: 600px)': {
    display: 'none',
  },
}));

// Animasyon ayarları
const cardVariants = {
  hiddenRight: { opacity: 0, rotateY: 180, x: 300 },
  hiddenLeft: { opacity: 0, rotateY: -180, x: -300 },
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
  exitRight: { opacity: 0, rotateY: 180, x: -300, transition: { duration: 0.6 } },
  exitLeft: { opacity: 0, rotateY: -180, x: 300, transition: { duration: 0.6 } },
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState('right'); // Yeni state: yönü takip eder

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
    setDirection('right'); // Yönü günceller
    setActiveProject((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrevProject = () => {
    setDirection('left'); // Yönü günceller
    setActiveProject((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ marginTop: 4, padding: '20px', backgroundColor: '#fff', borderRadius: '10px', position: 'relative' }}>
        <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 0, height: '100%', width: '100%' }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <Sphere args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial color="#8352FD" attach="material" distort={0.5} speed={2} />
          </Sphere>
        </Canvas>

        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#c12a8c', zIndex: 1, position: 'relative' }}>
          Projects
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={8} md={6} sx={{ position: 'relative' }}>
            <IconButton
              sx={{
                position: 'absolute',
                left: '-30px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
              }}
              onClick={handlePrevProject}
            >
              <ArrowBackIosIcon />
            </IconButton>

            <motion.div
              key={activeProject}
              initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
              animate="visible"
              exit={direction === 'right' ? 'exitRight' : 'exitLeft'}
              variants={cardVariants}
              style={{ perspective: 1000 }}
            >
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

              <StyledCard onClick={handleNextProject}>
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

            <IconButton
              sx={{
                position: 'absolute',
                right: '-30px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
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
