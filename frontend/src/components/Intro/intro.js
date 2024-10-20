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
          Selamlar, <br />
          Ben <span className="intro-name">
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
        </h1>
        <p className="intro-description">
          Modern web teknolojileriyle kullanıcı dostu, estetik ve işlevsel arayüzler tasarlayan bir frontend geliştiricisiyim. React.js ve Next.js gibi güçlü frameworklerle projeler geliştiriyor, aynı zamanda mobil uyumlu ve responsive tasarımlar oluşturuyorum. Takım çalışmasında uyumlu bir şekilde çalışarak, her ekran boyutunda mükemmel çalışan, akıcı ve şık web deneyimleri sunmaya özen gösteriyorum.
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
