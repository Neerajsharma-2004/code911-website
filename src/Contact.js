import React from 'react';
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section" id = "contact-info">
      <h2 className="contact-title" id = "the-title">Contact Us</h2>
      <div className="social-icons" id = "social-iconic">
        <a 
          href="https://www.instagram.com/code911.in" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
        >
          <FaInstagram size={30} />
        </a>
        <a 
          href="https://x.com/CODE911_in" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="X (opens in a new tab)" 
          className="social-icon"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 1227" 
            fill="currentColor" 
            aria-hidden="true"
            id = "x-logo"
          >
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/company/code911/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-icon"
        >
          <FaLinkedin size={30} />
        </a>
        <a 
          href="mailto:contact.code911@gmail.com" 
          target="_blank" 
          className="social-icon"
        >
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
