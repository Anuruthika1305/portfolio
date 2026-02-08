import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/Anuruthika1305', color: '#333' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/kosana-anuruthika-559252293', color: '#0077b5' },
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">Let's create something amazing together</p>

        <div className="contact-content" ref={containerRef}>
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-text">
                <h3>Email</h3>
                <p>23211a05e7@bvrit.ac.in</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📱</div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+91 9347778554</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Location</h3>
                <p>Hyderabad, India</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Connect With Me</h3>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    style={{ '--social-color': link.color }}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
              <span className="button-arrow">→</span>
            </button>
          </form>
        </div>
      </div>

      <div className="contact-bg">
        <div className="contact-bg-shape shape-1"></div>
        <div className="contact-bg-shape shape-2"></div>
      </div>
    </section>
  );
};

export default Contact;
