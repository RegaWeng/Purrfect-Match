import React from 'react';
import { Button } from 'react-bootstrap';
import './HeroSection.css'; 
import catImage from '../images/Herosection.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="text-container">
        <h1 style={{ fontFamily: 'Sofadi One, sans-serif' }}>
          Hold your expectations, and read our description
        </h1>
        <p style={{ fontFamily: 'Sofadi One, sans-serif' }}>
          Welcome to the purr-fectly hilarious world of Fluffy, the sassiest feline in town! Ever wondered what it's like to live with a cat that thinks it's the center of the universe? Well, you're in for a treat! Fluffy's got more attitude than a diva at a fashion show and more drama than a reality TV star. She demands gourmet meals, royal treatment, and will judge you from her throne with those piercing eyes that say, "You are beneath me, human." Get ready for a journey through Fluffy's kingdom, where every day is a cat-astrophe waiting to happen, and the hairballs are just the beginning!
        </p>
        <Button variant="primary">Get started</Button>
      </div>
      <div className="image-container">
        <img src={catImage} alt="Cat" />
      </div>
    </div>
  );
};

export default HeroSection;
