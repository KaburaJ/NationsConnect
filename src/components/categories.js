import React, { useState } from 'react';

const Categories = ({ onRegionChange }) => {
  const [selectedOption, setSelectedOption] = useState('All');

  const handleRegionChange = (value) => {
    setSelectedOption(value);
    onRegionChange(value);
  };

  return (
    <div className='categories'>
      <select value={selectedOption} onChange={(e) => handleRegionChange(e.target.value)} placeholder='Filter by Region'>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Categories;
