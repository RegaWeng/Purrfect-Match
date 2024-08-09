import React, { useState } from 'react';
// import CatCard from '../components/CatCard';
// import CatFilter from '../components/CatFilter';
// import CatData from '../data/CatData';
import './CatRange.css';
import axios from 'axios';

const CatRange = () => {
  const [childrenFriendly, setChildrenFriendly] = useState('');
  const [playfulness, setPlayfulness] = useState('');
  const [shedding, setShedding] = useState('');
  const [otherPetsFriendly, setOtherPetsFriendly] = useState('');

  const [result, setResult] = useState(null); // State for API result
  const [error, setError] = useState(null); // State for error handling

  const handleAdoptSubmit = async (e) => {
    e.preventDefault();

    // Convert in Int
    const childrenFriendlyValue = parseInt(childrenFriendly, 10) || 0;
    const playfulnessValue = parseInt(playfulness, 10) || 0;
    const sheddingValue = parseInt(shedding, 10) || 0;
    const otherPetsFriendlyValue = parseInt(otherPetsFriendly, 10) || 0;

    try {
      const response = await axios.post('http://localhost:3333/', {
        playfulness: playfulnessValue,
        children_friendly: childrenFriendlyValue,
        other_pets_friendly: otherPetsFriendlyValue,
        shedding: sheddingValue,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setResult(response.data); // Update state with the result
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Error fetching data.'); // Update state with error message
      setResult(null); // Clear any previous results
    }
  };

  const renderRadioButtons = (name, value, setter) => (
    <div>
      {[1, 2, 3, 4, 5].map((val) => (
        <label key={val}>
          <input
            type="radio"
            name={name}
            value={val}
            checked={value === val.toString()}
            onChange={(e) => setter(e.target.value)}
          />
          {val}
        </label>
      ))}
    </div>
  );

  return (
    <div className="adopt-page">
       <h1>Adopt</h1>
      <p>Welcome to our adoption page! Here you can find all the information you need to adopt a new furry friend.</p>

      <form onSubmit={handleAdoptSubmit}>
        <div>
          <label>1- On a scale of 1 to 5, how important is it to you that your new cat is good with children?</label>
          {renderRadioButtons('children_friendly', childrenFriendly, setChildrenFriendly)}
        </div>
        <br />

        <div>
          <label>2- How playful do you want your cat to be? (1 = calm and quiet, 5 = energetic and playful)</label>
          {renderRadioButtons('playfulness', playfulness, setPlayfulness)}
        </div>
        <br />

        <div>
          <label>3- On a scale of 1 to 5, how important is it to you that your new cat is good with children?</label>
          {renderRadioButtons('shedding', shedding, setShedding)}
        </div>
        <br />

        <div>
          <label>4- Do you have other pets in your home? If so, how important is it that your new cat gets along with them? (1 = not important, 5 = very important)</label>
          {renderRadioButtons('other_pets_friendly', otherPetsFriendly, setOtherPetsFriendly)}
        </div>
        <br />

        <button type="submit" name="submitBtn">Search</button>
      </form>

      <br />
      {/* Render the result */}
      {result && (
        <div className="result">
          {/* <h2>Results</h2> */}
          <p><strong>Selected Filters:</strong> {JSON.stringify(result.selectedFilter, null, 2)}</p>
          <p><strong>Cat(s)</strong></p>
          <ul>
            {result.data.map((cat, index) => (
              <li key={index}>
                <h4>{cat.name}</h4>
                <img src={cat.image_link} alt={cat.name} style={{ width: '150px', height: 'auto' }} />
                <p><strong>Origin:</strong> {cat.origin}</p>
                <p><strong>Children Friendly:</strong> {cat.children_friendly}</p>
                <p><strong>Playfulness:</strong> {cat.playfulness}</p>
                <p><strong>Shedding:</strong> {cat.shedding}</p>
                <p><strong>Other Pets Friendly:</strong> {cat.other_pets_friendly}</p>
                {/* Add more cat details as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Render the error */}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CatRange;

// const CatRange = () => {
//   const [filters, setFilters] = useState([
//     { label: 'Children Friendly', value: 3 },
//     { label: 'Playfulness', value: 3 },
//     { label: 'Shedding', value: 3 },
//     { label: 'Other Pets Friendly', value: 3 }
//   ]);

//   const handleRangeChange = (label, value) => {
//     setFilters((prevFilters) =>
//       prevFilters.map((filter) =>
//         filter.label === label ? { ...filter, value: parseInt(value, 10) } : filter
//       )
//     );
//   };

//   const filteredCats = CatData.filter((cat) => {
//     return (
//       cat.children_friendly >= filters.find((f) => f.label === 'Children Friendly').value &&
//       cat.playfulness >= filters.find((f) => f.label === 'Playfulness').value &&
//       cat.shedding <= filters.find((f) => f.label === 'Shedding').value &&
//       cat.other_pets_friendly >= filters.find((f) => f.label === 'Other Pets Friendly').value
//     );
//   });

//   return (
//     <div className="cat-range">
//       <CatFilter
//         filters={filters}
//         onRangeChange={handleRangeChange}
//       />
//       <div className="cat-cards">
//         {filteredCats.map((cat, index) => (
//           <CatCard 
//             key={index}
//             image={cat.image}
//             name={cat.name}
//             gender={cat.gender}
//             description={cat.description}
//             children_friendly={cat.children_friendly}
//             playfulness={cat.playfulness}
//             shedding={cat.shedding}
//             other_pets_friendly={cat.other_pets_friendly}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CatRange;
