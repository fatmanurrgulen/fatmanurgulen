import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiMui,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
} from 'react-icons/si';
import StyledIconCard from './StyledIconCard';

const technologies = [
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
  { name: 'Material UI', icon: <SiMui />, color: '#007FFF' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
];

const Technologies = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="technologies"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: 'transparent',
        color: isDark ? '#f5f5f5' : '#333',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
            color: isDark ? '#e09bc1' : '#c12a8c',
            mb: { xs: 4, md: 8 },
          }}
        >
          Kullandığım Teknolojiler
        </Typography>

        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 6 }}
          justifyContent="center"
          alignItems="center"
        >
          {technologies.map((tech, i) => (
            <Grid item key={i} xs={4} sm={3} md={2.4}>
              <Box display="flex" justifyContent="center">
                <Tooltip title={tech.name} arrow>
                  <StyledIconCard icon={tech.icon} color={tech.color} />
                </Tooltip>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Technologies;
