import React, { useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaGithub } from 'react-icons/fa';
import './intro.css';
import bg from '../../assets/image.png';

const Intro = () => {
  useEffect(() => {
    const introBg = document.querySelector('.intro-bg');

    const handleMouseMove = (event) => {
      const rect = introBg.getBoundingClientRect();
      const imgX = rect.left + rect.width / 2;
      const imgY = rect.top + rect.height / 2;

      const deltaX = event.clientX - imgX;
      const deltaY = event.clientY - imgY;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      if (distance < 100) {
        const moveX = (deltaX / distance) * 30;
        const moveY = (deltaY / distance) * 30;

        introBg.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        introBg.style.animation = 'moveAndScale 0.5s forwards';
      } else {
        introBg.style.animation = '';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="intro" className="intro-section">
      <div className="intro-content">
        <h1 className="intro-heading">
          Hello, <br />
          I'm <span className="intro-name">
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
          Front-End Developer
        </h1>
        <p className="intro-description">
          As a passionate frontend developer, I am focused on developing user-friendly and visually engaging interfaces. I am committed to continuously learning and staying updated with the latest technologies. My enthusiasm for front-end development drives me to improve and adapt in this fast-evolving field.
        </p>

        <div className="btn-group">
          <a href="/FatmaNurGulen_Cv.pdf" download="FatmaNurGulen_CV.pdf" className="btn">
            <FaDownload /> Download CV
          </a>
          <a href="https://github.com/fatmanurrgulen" target="_blank" rel="noopener noreferrer" className="btn github-btn">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>

      <div className="intro-bg-wrapper">
        <img src={bg} alt="profile" className="intro-bg" />
      </div>

      {/* Baloncuklar */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      <div className="bubble bubble-5"></div>
      <div className="bubble bubble-6"></div>
      <div className="bubble bubble-7"></div>
      <div className="bubble bubble-8"></div>
      <div className="bubble bubble-9"></div>
      <div className="bubble bubble-10"></div>
      <div className="bubble bubble-11"></div>
      <div className="bubble bubble-12"></div>
      <div className="bubble bubble-13"></div>
      <div className="bubble bubble-14"></div>
      <div className="bubble bubble-15"></div>
    </section>
  );
};

export default Intro;
