import React, { useState } from 'react'; 
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <img 
        src={logo} 
        alt="Logo" 
        className="logo" 
        onClick={scrollToTop} 
      />

      {/* Desktop Menu Button */}
      <button 
        className="desktopMenuBtn" 
        onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Contact Me
      </button>

      {/* Mobile Menu Icon */}
      <img 
        src={menu} 
        alt="Menu" 
        className="mobMenu" 
        onClick={() => setShowMenu(!showMenu)} 
      />

      {/* Dropdown Menu for Mobile */}
      <div 
        className="navMenu" 
        style={{ display: showMenu ? 'flex' : 'none' }}
      >
        <Link 
          activeClass='active' 
          to='contact' 
          spy={true} 
          smooth={true} 
          offset={-50} 
          duration={500} 
          className="listItem" 
          onClick={() => setShowMenu(!showMenu)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
