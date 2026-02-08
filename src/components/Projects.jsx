import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const containerRef = useRef(null);

  const projects = [
    {
      title: 'Farm Syncro',
      description:
        'A synchronization and monitoring tool for farms to optimize yield and resource allocation.',
      image: '🌾',
      technologies: ['React', 'IoT', 'Data'],
      gradient: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
      github: 'https://github.com/MadhusudhanKosari/Food-saver-app.git',
    },
    {
      title: 'Optimising Food Management using Gen AI',
      description:
        'A Gen-AI powered system to reduce food waste and optimize distribution using predictive models.',
      image: '🤖',
      technologies: ['AI', 'React', 'Data'],
      gradient: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
      github: 'https://github.com/Srivani1106/alimento-smart-swap.git',
    },
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
      const cards = containerRef.current.querySelectorAll('.project-card');
      cards.forEach((card) => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="title-underline"></div>
        {/* subtitle removed per request */}

        <div className="projects-grid" ref={containerRef}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="project-image-wrapper">
                <div
                  className="project-image"
                  style={{ background: project.gradient }}
                >
                  <div className="project-icon">{project.image}</div>
                </div>
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <span className="arrow">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-bg-elements">
        <div className="bg-shape bg-shape-1"></div>
        <div className="bg-shape bg-shape-2"></div>
      </div>
    </section>
  );
};

export default Projects;
