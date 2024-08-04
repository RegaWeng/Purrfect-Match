import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import './style.css';

const Homepage = () => {
  // Inline styles for container and card
  const containerStyle = {
    padding: '0',
    margin: '0 auto', // Center container horizontally
    backgroundColor: '#fff5fe',
  };

  const cardStyle = {
    backgroundColor: '#d5f3ff',
    border: '5px solid #d5f3ff',
  };

  return (
    <div>
      
      <div className="container mt-4" style={containerStyle}>
        <div className="row justify-content-center">
          {/* Main Text */}
          <div className="col-md-8 text-center">
            <h1 style={{ fontFamily: 'Sofadi One, sans-serif' }}>
              Welcome to Purrfect Match
            </h1>
            <p style={{ fontFamily: 'Sofadi One, sans-serif' }}>
              Our primary mission is to fill the world with kitty beans
            </p>
          </div>

          {/* Card */}
          <div className="col-md-4">
            <Card style={{ ...cardStyle, width: '18rem' }}>
              <Card.Body>
                <Card.Title>Got specific breeding?</Card.Title>
                <Card.Text>
                  Try searching them in advance
                </Card.Text>
                <Link to="/Quicksearch" className="btn btn-primary">
                  Quick Search
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <HeroSection />
      <ServicesSection />

    </div>
  );
};

export default Homepage;
