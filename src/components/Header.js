import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ activeSection, scrollToSection, currentTheme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (100vh - header height)
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Set scrolled state when we're past the hero section
      setIsScrolled(scrollPosition > heroHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h2>Rahul A</h2>
          </div>
          
          <button 
            className="mobile-menu-toggle"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
          </button>
          
          <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li>
                <button
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'portfolio' ? 'active' : ''}
                  onClick={() => handleNavClick('portfolio')}
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'resume' ? 'active' : ''}
                  onClick={() => handleNavClick('resume')}
                >
                  Resume
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => handleNavClick('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'services' ? 'active' : ''}
                  onClick={() => handleNavClick('services')}
                >
                  Expertise
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          
          <div className="theme-toggle">
            <button 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
            >
              <i className={`fas fa-${currentTheme === 'light' ? 'moon' : 'sun'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
