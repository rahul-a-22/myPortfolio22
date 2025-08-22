import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Sun Down Frontend',
      category: 'web-design',
      image: '/Sun_down.png',
      link: 'https://github.com/rahul-a-22/Sun_Down_Frontend',
      description: 'Interactive single-page frontend inspired by Sundown Studio with smooth scrolling, animated loaders, and modern UI components.'
    },
    {
      id: 2,
      title: 'Rashi Wedding Planner',
      category: 'web-development',
      image: '/wedding.png',
      link: 'https://github.com/rahul-a-22/rashi_wedding_planner',
      description: 'PHP-MySQL web application for managing wedding services with user sign-up, service booking, and admin dashboard features.'
    },
    {
      id: 3,
      title: 'IP Address Finder',
      category: 'web-development',
      image: 'ipAdress.png',
      link: 'https://github.com/rahul-a-22/IP_Adress_Finder',
      description: 'Modern web application to search IP addresses with geographical location, ISP details, and interactive map display.'
    },
    {
      id: 4,
      title: 'Frontend AI/ML Web Application',
      category: 'web-development',
      image: '/aiml_frontend.png',
      link: 'https://github.com/rahul-a-22/Frontend_AiMl_web',
      description: 'Frontend application showcasing AI/ML integration in modern web applications with responsive design.'
    },
    {
      id: 5,
      title: 'Bit and Build Project',
      category: 'web-development',
      image: '/bitnbuild.png',
      link: 'https://github.com/rahul-a-22/Bit_and_Build',
      description: 'Collaborative project for the Bit and Build hackathon, featuring modern web development technologies.'
    },
    {
      id: 6,
      title: 'LGPhackathon',
      category: 'web-development',
      image: '/lgphackathon.png',
      link: 'https://github.com/rahul-a-22/LGPhackathon',
      description: 'Hackathon project showcasing innovative web solutions and creative problem-solving approaches.'
    }
  ];

  const filters = ['all', 'web-development', 'web-design'];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id={id} className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Featured <strong>Portfolio</strong></h2>
        </div>
        
        <div className="portfolio-filters">
          <ul>
            {filters.map(filter => (
              <li key={filter}>
                <button
                  className={activeFilter === filter ? 'active' : ''}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter === 'web-development' ? 'Web Development' : 
                   filter === 'web-design' ? 'Web Design' :
                   filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} className="portfolio-photo" />
              </div>
              <div className="portfolio-info">
                <h4>{item.title}</h4>
                <p className="portfolio-description">{item.description}</p>
                <span className="category">{item.category === 'web-development' ? 'Web Development' : 
                                          item.category === 'web-design' ? 'Web Design' :
                                          item.category}</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  <i className="fab fa-github"></i> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
