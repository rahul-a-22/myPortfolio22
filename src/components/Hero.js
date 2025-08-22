import React from 'react';
import './Hero.css';

const Hero = ({ id }) => {
  const handleDownloadCV = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // Path to your resume in public folder
    link.download = 'Rahul_A_Resume.pdf'; // Name of the downloaded file
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewWork = () => {
    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hola, I'm <span>Rahul A</span>
            </h1>
            <p>
              A passionate Computer Science student with expertise in frontend development 
              and a keen interest in cybersecurity. Welcome to my portfolio where I showcase 
              my projects and technical skills.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleViewWork}>
                <i className="fas fa-eye"></i> View My Work
              </button>
              <button className="btn btn-secondary" onClick={handleDownloadCV}>
                <i className="fas fa-download"></i> Download CV
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/My_Photo.jpg" 
              alt="Rahul - Professional Developer" 
              className="hero-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="hero-photo-placeholder" style={{display: 'none'}}>
              <i className="fas fa-user"></i>
              <span>Profile Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
