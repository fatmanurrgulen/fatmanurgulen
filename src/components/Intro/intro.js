import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaDownload, FaGithub } from 'react-icons/fa';
import './intro.css';
import bg from '../../assets/image.png';

const Intro = () => {
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
    </section>
  );
};

export default Intro;
