import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';
import adoptIcon from '../images/Adopt.png';
import groomingIcon from '../images/Grooming.png';
import healthcareIcon from '../images/Healthcare.png';
import kittenIcon from '../images/Kitten.png';
import accessoriesIcon from '../images/Accessories.png';

const ServicesSection = () => {
  const services = [
    { title: 'Adopt', icon: adoptIcon, path: '/adopt' },
    { title: 'Grooming', icon: groomingIcon, path: '/grooming' },
    { title: 'Healthcare', icon: healthcareIcon, path: '/healthcare' },
    { title: 'Kitten', icon: kittenIcon, path: '/kitten' },
    { title: 'Accessories', icon: accessoriesIcon, path: '/accessories' },
  ];

  return (
    <div className="services-section">
      <h2>Services Category</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <Link to={service.path}>
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

