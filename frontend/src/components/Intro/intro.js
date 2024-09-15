import React from 'react';
import './intro.css';
import bg from '../../assets/image.jpg';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';  


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Fatma Nur</span> <br/> Front-End Developer</span>
            <p className="introPara">As a passionate frontend developer, I am focused <br/> on developing
my skills to create user-friendly <br/> and visually engaging interfaces.<br/> I am committed to
continuously learning and <br/>staying updated with the latest technologies. <br/> My enthusiasm
for front-end development<br/> drives me to improve and adapt in this<br/> fast-evolving field. I
thrive in collaborative <br/>environments where I can contribute<br/> and learn from others.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire"className='btnImg'/> Hire Me </button></Link>
        </div>
        <img src={bg} alt="profile" className="bg"/>
    </section>
  )
}

export default Intro;