import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>K Anuruthika</h3>
          <p>Frontend Developer | UI/UX Enthusiast</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Digital Spaces</h3>
          <ul>
            <li><a href="https://github.com/Anuruthika1305" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/kosana-anuruthika-559252293" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} K Anuruthika. All rights reserved.</p>
        <p>Designed & Built with <span className="heart">❤️</span> by K Anuruthika</p>
      </div>
    </footer>
  );
};

export default Footer;
