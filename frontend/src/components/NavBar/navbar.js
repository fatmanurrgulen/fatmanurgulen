import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Scroll functions
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickOutside = (event) => {
    if (
      showMenu &&
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      menuButtonRef.current &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" onClick={() => scrollToSection('top')} />

      {/* Desktop Menu Buttons */}
      <div className="desktop-menu">
        <button className="desktopMenuBtn" onClick={() => scrollToSection('contact')}>İletişim</button>
      </div>

      {/* Mobile Menu Icon */}
      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu((prev) => !prev)}
        ref={menuButtonRef}
      />

      {/* Dropdown Menu for Mobile */}
      {showMenu && (
        <div className="navMenu" ref={menuRef}>
          <button className="mobileMenuBtn" onClick={() => { scrollToSection('intro'); setShowMenu(false); }}>
            Tanıtım
          </button>
          <button className="mobileMenuBtn" onClick={() => { scrollToSection('projects'); setShowMenu(false); }}>
            Projeler
          </button>
          <button className="mobileMenuBtn" onClick={() => { scrollToSection('contact'); setShowMenu(false); }}>
            İletişim
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
