import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="animated-bg"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi I'm Anuruthika</h1>
          <h2 className="hero-subtitle">I'm a web developer</h2>
          <p className="hero-description">I build intelligent web experiences that think, adapt, and inspire. From pixels to predictions, I bring ideas to life with code and creativity.</p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
