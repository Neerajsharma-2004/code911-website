import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink
import './styles.css'; // Ensure to import the styles

const Home = () => {
  return (
    <div className="parallax-container">
      <motion.div
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <h1>Powering the Future</h1>
          <h1>with Green Energy</h1>
          <p>Innovative solutions for a sustainable tomorrow.</p>
          {/* Change the button to scroll to About */}
          <ScrollLink to="about" smooth={true} duration={500}>
           <button className="learn-more-button">Learn More</button>
          </ScrollLink>
        </div>
      </motion.div>
      <div className="video-background">
        <video autoPlay muted loop className="background-video">
          <source src="THE-EARTH.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay to reduce brightness only on bright areas */}
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default Home;
