import React, { useState, useEffect } from 'react';     
import { Container, Typography, Grid, Card, CardContent, Chip, IconButton } from '@mui/material';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const theme = createTheme();

// Stil edilmiş ana kart
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s, box-shadow 0.3s',
  borderRadius: '10px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[5],
  position: 'relative',
  zIndex: 1,
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[10],
  },
  width: '100%',
  maxWidth: '450px',
  '@media (max-width: 600px)': {
    maxWidth: '100%',  // Mobilde tam genişlik
    padding: '10px',
  },
}));

const BackgroundCard = styled(Card)(({ theme }) => ({
  position: 'absolute',
  top: '54%',
  right: '13%',
  width: '70%',
  height: '77%',
  backgroundColor: 'white',
  borderRadius: '10px',
  zIndex: 0,
  boxShadow: theme.shadows[2],
  opacity: 0.6,
  transform: 'translateY(-50%)',
  '@media (max-width: 600px)': {
    width: '90%',
    right: '5%',  // Mobilde daha ortada
    height: 'auto',  // Yükseklik mobilde otomatik ayarlansın
  },
}));


// Dalgalanma animasyonu
const waveAnimation = {
  hidden: { x: 0, opacity: 0 },
  visible: {
    x: [0, -20, 20, 0],
    opacity: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

// Kart animasyonları
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
  const [direction, setDirection] = useState('right');
  const [autoSlide, setAutoSlide] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600); // Başlangıçta boyut kontrolü
  const [isHovered, setIsHovered] = useState(false);

  const projectData = [
    {
      title: 'E-ticaret ve İlan Platformu',
      duration: 'Haziran 2024 - Halen',
      description: [
        'Frontend kısmında React.js, MUI (Material UI), Styled-Components ve React Router ile modern bir arayüz geliştirilmiştir. MUI ile özelleştirilmiş ikonlar ve stiller kullanıldı. Framer Motion animasyonları ile kullanıcı etkileşimini artıran tasarımlar oluşturuldu.',
        'Backend tarafında Node.js, Express.js, Sequelize ve MySQL kullanılarak veri yönetimi ve kullanıcı kimlik doğrulama sistemleri sağlanmıştır. JWT ile güvenli giriş işlemleri oluşturulmuş, CORS ile API güvenliği artırılmıştır.',
        ' Kullanıcıların, ilan ekleme, düzenleme, silme ve favori listelerini yönetme gibi işlemleri gerçekleştirmesi sağlanmaktadır. Ayrıca diğer kullanıcılarla iletişim kurarak etkileşimde bulunabilir. Responsive tasarım sayesinde tüm cihazlarla uyumludur.',
      ],
      technologies: ['React.js', 'Node.js', 'MySQL'],
    },
    {
      title: 'Kişisel Web Sitesi',
      duration: 'Ekim 2024',
      description: [
        'React.js ve Material UI kullanarak geliştirilen modern bir portföy web sitesi, kullanıcıların rahatça gezinebileceği bir deneyim sunmaktadır. Kullanıcı dostu arayüz ile etkileşimli bir tasarım oluşturulmuştur. Web sitesi, kullanıcıların ihtiyaçlarına göre çeşitli özellikler sunmaktadır.',
        'Dinamik bir intro bileşeni ve zenginleştirilmiş proje kartları ile Framer Motion animasyonları, kullanıcı etkileşimini artırmak için tasarlanmıştır. Projeler arasında ok tuşları ile akıcı geçişler sağlanmaktadır. Kullanıcılar, projeleri kolayca inceleyip keşfedebilmektedir.',
        'Web sitesi, form gönderimleri için EmailJS entegrasyonu ile güçlendirilmiştir. Vercel üzerinde barındırılmakta ve düzenli olarak içerik güncellemeleri yapılmaktadır. Kullanıcı deneyimi sürekli olarak geliştirilmektedir.',
      ],
      technologies: ['JavaScript', 'React.js'],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoSlide) {
        handleNextProject();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoSlide]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNextProject = () => {
    setDirection('right');
    setActiveProject((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePrevProject = () => {
    setDirection('left');
    setActiveProject((prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length);
  };

  const handleCardClick = () => {
    setAutoSlide(false);
    handleNextProject();
    setTimeout(() => setAutoSlide(true), 5000);
  };

  const handleCardHover = () => {
    setIsHovered(true);
    setAutoSlide(false);
  };

  const handleCardLeave = () => {
    setIsHovered(false);
    setAutoSlide(true);
  };


  const waveStyle = (position) => ({
    position: 'absolute',
    top: '35%',
    width: '20px',
    height: '150px',
    backgroundColor: '#c12a8c',
    borderRadius: '10px',
    zIndex: 1,
    [position]: '0',
    transform: 'translateY(-50%)',
    '@media (max-width: 600px)': {
      display: 'none',  // Mobilde gizleyelim
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
      id="projects" 
        sx={{
          mt: 4,
          py: 3,
          backgroundColor: '#fff',
          borderRadius: '10px',
          position: 'relative',
          overflow: 'visible',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        <Typography
  variant="h4"
  component="h2"
  gutterBottom
  align="center"
  sx={{
    fontWeight: 'bold', 
    color: '#c12a8c', 
    zIndex: 1,
    position: 'relative', 
    top: '-20px',   
    display: 'flex',  
    justifyContent: 'center',
    transform: 'translateX(-25px)',
    '@media (max-width: 600px)': {
      justifyContent: 'center',
      transform: 'translateX(0)', // Mobilde ortalamak için sıfırlıyoruz
    },
  }}
>
  Projeler
</Typography>

        <Grid container spacing={4} justifyContent="center" sx={{ position: 'relative' }}>
          {/* Sol dalgalanma animasyonu */}
          {!isMobile && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={waveAnimation}
              style={waveStyle('left')}
            />
          )}

          <Grid item xs={12} sm={8} md={6} sx={{ position: 'relative' }}>

            {/* Arka plan kartı */}
            <BackgroundCard />

            <motion.div
              key={activeProject}
              initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
              animate="visible"
              exit={direction === 'right' ? 'exitRight' : 'exitLeft'}
              variants={cardVariants}
              style={{ perspective: 1000 }}
            >
              <StyledCard 
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
              className={isHovered ? 'hovered' : ''}
            onClick={handleCardClick}>
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom sx={{ color: '#c12a8c' }}>
                    {projectData[activeProject].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {projectData[activeProject].duration}
                  </Typography>
                  {projectData[activeProject].description.map((text, index) => (
                    <Typography key={index} variant="body2" paragraph>
                      {text}
                    </Typography>
                  ))}
                  <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '8px' }}>
                    {projectData[activeProject].technologies.map((tech) => (
                      <Chip key={tech} label={tech} sx={{ margin: '4px', backgroundColor: '#e8a6cd', color: '#c12a8c' }} />
                    ))}
                  </div>
                </CardContent>
              </StyledCard>
            </motion.div>

            <IconButton
  sx={{
    position: 'absolute',
    left: { xs: '-40px', sm: '-50px', md: '-60px', lg: '-70px' },
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 3,
    width: '40px', // Genişlik
    height: '40px', // Yükseklik
    backgroundColor: '#ffffff',
    borderRadius: '50%', // Yuvarlak yapar
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease-in-out',
    display: { xs: 'none', sm: 'flex' }, // Flexbox kullanarak simgeyi ortalıyoruz
    alignItems: 'center', // Dikey ortalama
    justifyContent: 'center', // Yatay ortalama
    '&:hover': {
      backgroundColor: '#e0e0e0',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.25)',
    },
  }}
  onClick={() => {
    handlePrevProject();
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 5000);
  }}
>
  <ArrowBackIosIcon sx={{ color: '#c12a8c', fontSize: { xs: '16px', sm: '20px', md: '24px' } }} />
</IconButton>

<IconButton
  sx={{
    position: 'absolute',
    right: { xs: '-40px', sm: '-50px', md: '-60px', lg: '-70px' },
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 3,
    width: '40px',
    height: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease-in-out',
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: '#e0e0e0',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.25)',
    },
  }}
  onClick={() => {
    handleNextProject();
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 5000);
  }}
>
  <ArrowForwardIosIcon sx={{ color: '#c12a8c', fontSize: { xs: '16px', sm: '20px', md: '24px' } }} />
</IconButton>


          </Grid>

          {/* Sağ dalgalanma animasyonu */}
          {!isMobile && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={waveAnimation}
              style={waveStyle('right')}
            />
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Projects;