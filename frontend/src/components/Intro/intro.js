import React from 'react'; 
import { Typewriter } from 'react-simple-typewriter';
import './intro.css';  // Stil dosyanızı ekleyin
import bg from '../../assets/image.png';
import { FaDownload } from 'react-icons/fa';


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello<br /></span>
        <span className="introText">
          I'm <span className="introName">
            <Typewriter
              words={['Fatmanur Gülen']}
              loop={true}
              cursor
              cursorStyle='|' // İmleç stili
              typeSpeed={100}  // Yazma hızı
              deleteSpeed={100} // Silme hızı
              delaySpeed={1500} // Yazıldıktan sonra bekleme süresi
              style={{ display: 'inline' }} // Yazıyı düz tutmak için
            />
          </span> <br /> Front-End Developer
        </span>
        <p className="introPara">
        As a passionate frontend developer, I am focused  on developing
my skills to create user-friendly  and visually engaging interfaces. I am committed to
continuously learning and staying updated with the latest technologies.  My enthusiasm
for front-end development drives me to improve and adapt in thisfast-evolving field. I
thrive in collaborative environments where I can contribute and learn from others.
        </p>
        <div className="btnGroup">
        <a href="/FatmaNurGulen_Cv.pdf" download="FatmaNurGulen_CV.pdf" className="btn">
  <FaDownload /> Download CV
</a>
        </div>
      </div>
      <img src={bg} alt="profile" className="bg"/>    </section>
  )
}

export default Intro;
