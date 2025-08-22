import React from 'react';
import './Resume.css';

const Resume = ({ id }) => {
  const handleViewResume = () => {
    // Open resume in a new tab for viewing
    window.open('/Resume.pdf', '_blank');
  };

  const education = [
    {
      id: 1,
      period: '2022 - 2026',
      degree: 'B.Tech in Computer Science and Engineering',
      description: 'CGPA: 8.3',
      institution: 'University of Visvesvaraya College of Engineering'
    },
    {
      id: 2,
      period: '2020 - 2022',
      degree: 'PCMB',
      description: '90.33%',
      institution: 'S Nijalingappa PU College'
    },
    {
      id: 3,
      period: '2019 - 2020',
      degree: 'SSLC',
      description: '96.96%',
      institution: 'M P Prakash High School'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Rashi Wedding Planner',
      description: 'Developed a PHP-MySQL web application for managing wedding services with user sign-up, service booking, and admin dashboard features. Implemented dynamic cost calculation, service availability checks, and responsive UI using Bootstrap, jQuery, and Lightbox.',
      tech: 'PHP, MySQL, Bootstrap, jQuery, Lightbox'
    },
    {
      id: 2,
      title: 'IP Address Finder',
      description: 'A modern, responsive web application that allows users to search for IP addresses and view detailed information including geographical location, ISP details, timezone, and currency. Features an interactive map display powered by Mapbox.',
      tech: 'React.js, Vite, CSS, Mapbox API'
    },
    {
      id: 3,
      title: 'Sun Down Frontend (Clone)',
      description: 'An interactive, single-page frontend inspired by Sundown Studio. Features smooth scrolling, animated loaders, marquee section, hover-preview gallery, and carousel built with vanilla HTML/CSS/JS plus lightweight libraries.',
      tech: 'HTML, CSS, JavaScript, Vanilla JS'
    }
  ];

  const skills = [
    { name: 'C', icon: 'fas fa-code' },
    { name: 'C++', icon: 'fas fa-code' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'React.js', icon: 'fab fa-react' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'DSA', icon: 'fas fa-sitemap' },
    { name: 'DBMS', icon: 'fas fa-database' },
    { name: 'OS', icon: 'fas fa-desktop' },
    { name: 'CN', icon: 'fas fa-network-wired' }
  ];

  return (
    <section id={id} className="resume">
      <div className="container">
        <div className="section-header">
          <h2>My <strong>Resume</strong></h2>
        </div>
        
        <div className="resume-content">
          <div className="resume-section">
            <h3>Education</h3>
            {education.map(item => (
              <div key={item.id} className="resume-item">
                <span className="period">{item.period}</span>
                <h4>{item.degree}</h4>
                <div className="company">{item.institution}</div>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="resume-section">
            <h3>Projects</h3>
            {projects.map(item => (
              <div key={item.id} className="resume-item">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="tech-stack"><strong>Tech Stack:</strong> {item.tech}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <button className="btn btn-primary" onClick={handleViewResume}>
            <i className="fas fa-eye"></i> View Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
