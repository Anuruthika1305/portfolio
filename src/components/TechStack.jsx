import React, { useEffect, useRef } from 'react';
import './TechStack.css';

const TechStack = () => {
  const containerRef = useRef(null);

  const technologies = [
    { name: 'HTML', icon: '◉', symbol: 'Html5', color: '#f97316' },
    { name: 'CSS', icon: '▢', symbol: 'Style', color: '#3b82f6' },
    { name: 'JavaScript', icon: '⟨⟩', symbol: 'Script', color: '#fbbf24' },
    { name: 'React', icon: '⚛', symbol: 'Component', color: '#06b6d4' },
    { name: 'Python', icon: '⧉', symbol: 'Logic', color: '#3b82f6' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.tech-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="tech-stack" id="tech-stack">
      <div className="tech-container">
        <h2 className="section-title">Tech Stack</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">Technologies and languages I work with</p>

        <div className="tech-grid" ref={containerRef}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="tech-card"
              style={{ '--color': tech.color, transitionDelay: `${index * 0.08}s` }}
            >
              <div className="tech-icon-wrapper">
                <div className="tech-icon">{tech.icon}</div>
                <div className="tech-glow"></div>
              </div>

              <h3 className="tech-name">{tech.name}</h3>
              <p className="tech-symbol">{tech.symbol}</p>

              <div className="tech-bar">
                <div className="tech-progress"></div>
              </div>

              {/* feature tags removed per request */}
            </div>
          ))}
        </div>
      </div>

      <div className="floating-elements">
        <div className="float-elem elem-1"></div>
        <div className="float-elem elem-2"></div>
        <div className="float-elem elem-3"></div>
      </div>
    </section>
  );
};

export default TechStack;
