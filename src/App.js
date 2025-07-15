import React, { useContext, useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from './components/NavBar/navbar';
import SplashScreen from './components/SplashScreen/SplashScreen';
import Intro from './components/Intro/intro';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/projects';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

import ThemeContextProvider, { ColorModeContext } from './context/ThemeContext';

const AppContent = () => {
  const { toggleColorMode } = useContext(ColorModeContext);

  return (
    <>
      <Helmet>
        <title>Fatmanur Gülen | Frontend Developer</title>
        <meta name="description" content="React.js ile geliştirilmiş kişisel portfolyo sitesi." />
        <meta name="keywords" content="Fatmanur Gülen, Frontend Developer, React.js, Web Developer, Portfolio" />
        <meta name="author" content="Fatmanur Gülen" />
        <meta property="og:title" content="Fatmanur Gülen | Frontend Developer" />
        <meta property="og:description" content="Modern, sezgisel ve responsive tasarımlar." />
        <meta property="og:image" content="https://www.fatmanurgulen.com/preview.png" />
        <meta property="og:url" content="https://www.fatmanurgulen.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
        <Navbar toggleTheme={toggleColorMode} />
        <Intro />
        <Technologies />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3 saniye splash ekranı

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <ThemeContextProvider>
        {showSplash ? <SplashScreen /> : <AppContent />}
      </ThemeContextProvider>
    </HelmetProvider>
  );
};

export default App;
