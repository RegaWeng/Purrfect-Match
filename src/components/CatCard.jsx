
import React from 'react';
import './CatCard.css';

const CatCard = ({ image, name, gender, description, children_friendly, playfulness, shedding, other_pets_friendly }) => {
  return (
    <div className="cat-card">
      <img src={image} alt={name} className="cat-image" />
      <h3>{name}</h3>
      <p>{gender}</p>
      <p>{description}</p>
      <p>Children Friendly: {children_friendly}/5</p>
      <p>Playfulness: {playfulness}/5</p>
      <p>Shedding: {shedding}/5</p>
      <p>Other Pets Friendly: {other_pets_friendly}/5</p>
    </div>
  );
};

export default CatCard;
