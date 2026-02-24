import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
  Slide,
  Container
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import logo from '../../assets/logo.png';
import menuIcon from '../../assets/menu.png';

const Navbar = ({ toggleTheme }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const menuRef = useRef(null);

  // ✅ useMemo ile stabilize edildi
  const menuItems = useMemo(() => [
    { id: 'intro', label: 'Tanıtım' },
    { id: 'technologies', label: 'Teknolojiler' },
    { id: 'projects', label: 'Projeler' },
    { id: 'certificates', label: 'Sertifikalar' },
    { id: 'contact', label: 'İletişim' },
  ], []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const offset = 80;

    if (element) {
      const top =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }

    setActiveSection(id);
    setMenuOpen(false);
  };

  // ✅ Menü dışına tıklayınca kapatma
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ✅ Scroll aktif section tespiti (optimize)
  useEffect(() => {
    let timeout = null;

    const handleScroll = () => {
      if (timeout) return;

      timeout = setTimeout(() => {
        const offset = 120;

        const sections = menuItems.map((item) => ({
          id: item.id,
          top: document
            .getElementById(item.id)
            ?.getBoundingClientRect().top,
        }));

        const current = sections.find(
          (s) => s.top >= 0 && s.top < offset + 40
        );

        if (current?.id && current.id !== activeSection) {
          setActiveSection(current.id);
        }

        timeout = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, menuItems]);

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        bgcolor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 3,
        zIndex: 1200,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          px: { xs: 2, sm: 4 },
          py: { xs: 1, sm: 1.5 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => scrollToSection('intro')}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ height: { xs: 32, sm: 40, md: 44 } }}
          />
        </Box>

        {/* Desktop Menu */}
        {!isMobile && (
          <Box component="nav" sx={{ display: 'flex', gap: 3 }}>
            {menuItems.map((item) => (
              <Box
                key={item.id}
                component="button"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  position: 'relative',
                  background: 'none',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: theme.palette.text.primary,
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out',

                  '&:hover': {
                    bgcolor: '#f5b2d1',
                    color: '#fff',
                  },

                  '&:active': {
                    bgcolor: '#c12a8c',
                    color: '#fff',
                  },

                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 8,
                    right: 8,
                    height: '2px',
                    backgroundColor:
                      activeSection === item.id
                        ? '#c12a8c'
                        : 'transparent',
                    transition: 'all 0.2s ease-in-out',
                    borderRadius: 1,
                  },
                }}
              >
                {item.label}
              </Box>
            ))}
          </Box>
        )}

        {/* Right Side */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton onClick={toggleTheme} color="inherit">
            {theme.palette.mode === 'dark'
              ? <Brightness7 />
              : <Brightness4 />}
          </IconButton>

          {isMobile && (
            <Box onClick={() => setMenuOpen(!menuOpen)}>
              <Box
                component="img"
                src={menuIcon}
                alt="menu"
                sx={{ width: 28, cursor: 'pointer' }}
              />
            </Box>
          )}
        </Box>
      </Container>

      {/* Mobile Menu */}
      <Slide direction="down" in={menuOpen} mountOnEnter unmountOnExit>
        <Box
          ref={menuRef}
          sx={{
            width: '100%',
            maxWidth: '100vw',
            overflowX: 'hidden',
            bgcolor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            boxShadow: 4,
            zIndex: 1100,
            py: 2,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            position: 'absolute',
            top: '100%',
            left: 0,
          }}
        >
          {menuItems.map((item) => (
            <Box
              key={item.id}
              component="button"
              onClick={() => scrollToSection(item.id)}
              sx={{
                position: 'relative',
                fontSize: { xs: '1rem', sm: '1.05rem' },
                fontWeight: 500,
                px: 2,
                py: 1.25,
                textAlign: 'left',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                color: theme.palette.text.primary,
                transition: 'all 0.2s ease-in-out',

                '&:hover': {
                  bgcolor: '#f5b2d1',
                  color: '#fff',
                },

                '&:active': {
                  bgcolor: '#c12a8c',
                  color: '#fff',
                },

                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 4,
                  left: 8,
                  right: 8,
                  height: '2px',
                  backgroundColor:
                    activeSection === item.id
                      ? '#c12a8c'
                      : 'transparent',
                  transition: 'all 0.2s ease-in-out',
                  borderRadius: 1,
                },
              }}
            >
              {item.label}
            </Box>
          ))}
        </Box>
      </Slide>
    </Box>
  );
};

export default Navbar;