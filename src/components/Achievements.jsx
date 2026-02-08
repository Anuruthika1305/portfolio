import React, { useEffect, useRef } from 'react';
import './Achievements.css';

const AchievementItem = ({ icon, title, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) el.classList.add('visible');
      });
    }, { threshold: 0.2 });
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <li ref={ref} className="achievement-item">
      <div className="icon">{icon}</div>
      <div className="content">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </li>
  );
};

const Achievements = () => {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-container">
        <h2 className="section-title">Achievements & Recognition</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">Selected recognitions and accepted works</p>

        <ul className="achievements-list-main">
          <AchievementItem icon={<span className="spark">📄</span>} title="IEEE Acceptance">
            Received an official acceptance letter from IEEE for the paper "Optimising food management: personalized nutrition, smart planning for healthier living using GenAI".
          </AchievementItem>

          <AchievementItem icon={<span className="spark">🏅</span>} title="Smart India Hackathon 2024">
            Selected for Level 2 — Smart India Hackathon 2024.
          </AchievementItem>
        </ul>
      </div>
      <div className="achievements-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
};

export default Achievements;
