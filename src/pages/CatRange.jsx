import React, { useState } from 'react';
import CatCard from '../components/CatCard';
import CatFilter from '../components/CatFilter';
import CatData from '../data/CatData';
import './CatRange.css';

const CatRange = () => {
  const [filters, setFilters] = useState([
    { label: 'Children Friendly', value: 1 },
    { label: 'Playfulness', value: 1 },
    { label: 'Shedding', value: 1 },
    { label: 'Other Pets Friendly', value: 1 }
  ]);

  const handleRangeChange = (label, value) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.label === label ? { ...filter, value: parseInt(value, 10) } : filter
      )
    );
  };

  const filteredCats = CatData.filter((cat) => {
    return (
      cat.children_friendly >= filters.find((f) => f.label === 'Children Friendly').value &&
      cat.playfulness >= filters.find((f) => f.label === 'Playfulness').value &&
      cat.shedding <= filters.find((f) => f.label === 'Shedding').value &&
      cat.other_pets_friendly >= filters.find((f) => f.label === 'Other Pets Friendly').value
    );
  });

  return (
    <div className="cat-range">
      <CatFilter
        filters={filters}
        onRangeChange={handleRangeChange}
      />
      <div className="cat-cards">
        {filteredCats.map((cat, index) => (
          <CatCard 
            key={index}
            image={cat.image}
            name={cat.name}
            gender={cat.gender}
            description={cat.description}
            children_friendly={cat.children_friendly}
            playfulness={cat.playfulness}
            shedding={cat.shedding}
            other_pets_friendly={cat.other_pets_friendly}
          />
        ))}
      </div>
    </div>
  );
};

export default CatRange;
