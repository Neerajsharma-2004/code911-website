import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Element } from 'react-scroll';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import './styles.css';

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setNavVisible(false); // Scrolling down
      } else {
        setNavVisible(true); // Scrolling up
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <nav className={navVisible ? 'nav-visible' : 'nav-hidden'}>
        <div className="logo">
          {/* Image logo */}
          <img src="/logo192.png" alt="CODE911 Logo" className="logo-image" />
        </div>
        <div className="hamburger" onClick={toggleNav}>
          <div className={`bar ${navOpen ? 'open' : ''}`}></div>
          <div className={`bar ${navOpen ? 'open' : ''}`}></div>
          <div className={`bar ${navOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-links ${navOpen ? 'open' : ''}`}>
          <li><ScrollLink to="home" smooth={true} duration={500} onClick={toggleNav}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={500} onClick={toggleNav}>About</ScrollLink></li>
          <li><ScrollLink to="services" smooth={true} duration={500} onClick={toggleNav}>Services</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500} onClick={toggleNav}>Contact</ScrollLink></li>
        </ul>
      </nav>
      {/* Overlay for mobile menu */}
      {navOpen && <div className="overlay" onClick={toggleNav}></div>}

      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
};

export default App;
