import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({
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
        onClick={scrollToContact}
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
        <button 
          className="mobileMenuBtn" 
          onClick={() => {
            scrollToContact();
            setShowMenu(false); // Menü kapansın
          }}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
