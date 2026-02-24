import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  useTheme,
} from '@mui/material';

import { motion } from 'framer-motion';

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
  SiFigma,
  SiVercel,
} from 'react-icons/si';

import StyledIconCard from './StyledIconCard';

const techData = [
  { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6', category: 'Frontend' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', category: 'Frontend' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', category: 'Frontend' },
  { name: 'React', icon: <SiReact />, color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000', category: 'Frontend' },
  { name: 'Material UI', icon: <SiMui />, color: '#007FFF', category: 'Frontend' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4', category: 'Frontend' },

  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', category: 'Backend' },
  { name: 'Express', icon: <SiExpress />, color: '#000', category: 'Backend' },
  { name: 'MySQL', icon: <SiMysql />, color: '#4479A1', category: 'Backend' },

  { name: 'Figma', icon: <SiFigma />, color: '#F24E1E', category: 'Tools' },
  { name: 'Vercel', icon: <SiVercel />, color: '#000', category: 'Tools' },
];

const categories = ['Hepsi', 'Frontend', 'Backend', 'Tools'];

const Technologies = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const [filter, setFilter] = useState('Hepsi');

  const filteredTech =
    filter === 'Hepsi'
      ? techData
      : techData.filter((t) => t.category === filter);

  return (
    <Box
      id="technologies"
      sx={{
        py: { xs: 8, md: 12 },
backgroundColor: 'transparent', color: isDark ? '#f5f5f5' : '#333',      }}
    >
      <Container maxWidth="lg">

        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: { xs: '1.9rem', md: '2.5rem' },
            color: isDark ? '#e09bc1' : '#c12a8c',
            mb: 4,
          }}
        >
          Kullandığım Teknolojier
        </Typography>

        {/* Filters */}
        <Box display="flex" justifyContent="center" gap={2} mb={6} flexWrap="wrap">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={filter === cat ? 'contained' : 'outlined'}
              onClick={() => setFilter(cat)}
              sx={{
                borderRadius: 20,
                textTransform: 'none',
                px: 3,
              }}
            >
              {cat}
            </Button>
          ))}
        </Box>

        {/* Grid */}
        <Grid container spacing={5} justifyContent="center">
          {filteredTech.map((tech, i) => (
            <Grid item xs={4} sm={3} md={2} key={tech.name}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap={1.5}
                >
                  <StyledIconCard icon={tech.icon} color={tech.color} />

                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 500, opacity: 0.85 }}
                  >
                    {tech.name}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default Technologies;