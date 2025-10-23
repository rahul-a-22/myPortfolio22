import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'ChatPort',
      category: 'application',
      image: '/chatport.png',
      link: 'https://github.com/rahul-a-22/ChartPort',
      description: 'ChatPort is a Python-based client-server application that enables real-time chatting and secure file sharing over a network.'
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
      title: 'Mini IP Command Tool',
      category: 'application',
      image: '/mini_ip_tool.png',
      link: 'https://github.com/rahul-a-22/mini_ip_command_tool',
      description: 'The Mini IP Command Tool is a cross-platform command-line application to manage IP/network configuration on Windows and Linux.'
    },
    {
      id: 5,
      title: 'PassGuard',
      category: 'web-development',
      image: '/addPassword.png',
      link: 'https://github.com/rahul-a-22/PassGuard',
      description: 'A full-stack PassGuard application built with React, Node.js, Express, and MySQL. This application allows users to securely store and manage their passwords with features like authentication, password encryption, and a user-friendly interface.'
    },
    {
      id: 6,
      title: 'Covid-19 Detection using X-Ray Images',
      category: 'machine-learning',
      image: '/covid-19.png',
      link: 'https://github.com/rahul-a-22/covid_19_detection_X-ray',
      description: 'A comprehensive web application that uses deep learning to detect COVID-19, Viral Pneumonia, and Normal cases from chest X-ray images. Built with Streamlit frontend and Flask backend API, powered by PyTorch.'
    },
    {
      id: 7,
      title: 'LGPhackathon',
      category: 'web-development',
      image: '/lgphackathon.png',
      link: 'https://github.com/rahul-a-22/LGPhackathon',
      description: 'Hackathon project showcasing innovative web solutions and creative problem-solving approaches.'
    }
  ];

  const filters = ['all', 'web-development', 'application', 'machine-learning'];

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
                    filter === 'application' ? 'Application' :
                      filter === 'machine-learning' ? 'Machine Learning' :
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
                  item.category === 'application' ? 'Application' :
                  item.category === 'machine-learning' ? 'Machine Learning' :
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
