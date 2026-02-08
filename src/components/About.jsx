import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content" ref={contentRef}>
          <div className="about-image-container">
            <img src="/profile.jpeg" alt="Profile" className="about-image" />
            <div className="floating-shape shape-a"></div>
            <div className="floating-shape shape-b"></div>
          </div>

          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline"></div>
            
            <p className="about-paragraph">
              I'm K Anuruthika, a passionate frontend developer with a keen interest in building interactive 
              and visually engaging web applications. My journey in web development started with curiosity about 
              how things work on the internet, and it has evolved into a career focused on creating exceptional 
              user experiences.
            </p>

            <p className="about-paragraph">
              I believe in the power of clean code, intuitive design, and continuous learning. Whether it's crafting 
              responsive layouts with CSS, building dynamic interfaces with React, or exploring new technologies, 
              I'm always eager to take on new challenges and contribute to meaningful projects.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h3 className="stat-number">5</h3>
                <p className="stat-label">Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">5</h3>
                <p className="stat-label">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
