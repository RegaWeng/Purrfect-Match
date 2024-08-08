import React from 'react';
import './CatFilter.css';

const CatFilter = ({ filters, onRangeChange }) => {
  return (
    <div className="cat-filter">
      {filters.map((filter, index) => (
        <div key={index} className="filter-range">
          <label>{filter.label}</label>
          <input
            type="range"
            min="1"
            max="5"
            value={filter.value}
            onChange={(e) => onRangeChange(filter.label, e.target.value)}
          />
          <span>{filter.value}</span>
        </div>
      ))}
    </div>
  );
};

export default CatFilter;
