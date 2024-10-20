import React, { useState, useEffect, useRef } from 'react'; 
import './navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickOutside = (event) => {
    if (showMenu && menuRef.current && !menuRef.current.contains(event.target) &&
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)) {
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
      <img 
        src={logo} 
        alt="Logo" 
        className="logo" 
        onClick={scrollToTop} 
      />

      {/* Desktop Menu Buttons */}
      <button 
        className="desktopMenuBtn" 
        onClick={scrollToContact}
      >
        İletişim
      </button>

      {/* Mobile Menu Icon */}
      <img 
        src={menu} 
        alt="Menu" 
        className="mobMenu" 
        onClick={() => setShowMenu(prev => !prev)} 
        ref={menuButtonRef}
      />

      {/* Dropdown Menu for Mobile */}
      {showMenu && (
        <div className="navMenu" ref={menuRef}>
          <button 
            className="mobileMenuBtn" 
            onClick={() => {
              scrollToProjects();
              setShowMenu(false); // Close the menu
            }}
          >
            Projeler
          </button>
          <button 
            className="mobileMenuBtn" 
            onClick={() => {
              scrollToContact();
              setShowMenu(false); // Close the menu
            }}
          >
            İletişim
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
