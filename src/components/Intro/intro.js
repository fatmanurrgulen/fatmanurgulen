import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import './intro.css';
import bg from '../../assets/image.png';

const Intro = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const scrollToSection = () => {
    const target = document.getElementById('technologies');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.section
        id="intro"
        className={`intro-section ${isDark ? 'dark' : 'light'}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
      >
        <div className="intro-glow-bg"></div>

        {[...Array(8)].map((_, i) => (
          <div key={i} className={`bubble bubble-${i + 1}`}></div>
        ))}

        <motion.div
          className="intro-content"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="intro-heading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Selamlar, <br />
            Ben{' '}
            <span className="intro-name">
              <Typewriter
                words={['Fatmanur Gülen']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1500}
              />
            </span>
            <br />
            Front-End Geliştiriciyim
          </motion.h1>

          <p className="intro-description">
            Modern web teknolojileriyle kullanıcı dostu, estetik ve yüksek performanslı arayüzler geliştiriyorum.
            React.js ve Next.js gibi güçlü framework’lerle ölçeklenebilir projeler üretiyor, 
            mobil uyumlu ve responsive tasarımlar oluşturuyorum. 
            Analitik düşünme yeteneğim ve güçlü iletişim becerilerim sayesinde ekip içinde etkili işbirlikleri
            kurarak her cihazda kusursuz çalışan, akıcı ve şık dijital deneyimler tasarlamaya odaklanıyorum.
          </p>

          <motion.div
            className="btn-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="/FatmaNurGulen_Cv.pdf" download className="btn">
              <FaDownload /> CV İndir
            </a>
            <a
              href="https://github.com/fatmanurrgulen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/fatmanurgulen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="intro-bg-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="rotating-border"></div>
          <img src={bg} alt="Fatmanur Gülen" className="intro-bg" />
        </motion.div>

        <motion.div
          className="scroll-arrow"
          onClick={scrollToSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <FaChevronDown />
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Intro;
