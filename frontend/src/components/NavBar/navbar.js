import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome bileşenini import edin
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // E-posta ikonunu import edin
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Client</Link>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>
        <FontAwesomeIcon icon={faEnvelope} className="icon" /> Contact Me
      </button>

      <img src={menu} alt="Menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>About</Link>
        <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Client</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(!showMenu)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
